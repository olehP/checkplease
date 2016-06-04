package com.angelhack.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.angelhack.dao.CustomerDAO;
import com.angelhack.dao.MenuItemDAO;
import com.angelhack.dao.TableCustomerDAO;
import com.angelhack.dao.TableDAO;
import com.angelhack.entity.Customer;
import com.angelhack.entity.MenuItem;
import com.angelhack.entity.Restaurant;
import com.angelhack.entity.Table;
import com.angelhack.entity.TableCustomer;
import com.angelhack.model.UserId;
import com.angelhack.model.incomming.User;
import com.angelhack.util.ToMessageElementTransformator;

@Service
public class CustomerService {
	@Autowired
	private CustomerDAO customerDAO;
	@Autowired
	private TableCustomerDAO tableCustomerDAO;
	@Autowired
	private TableDAO tableDAO;
	@Autowired
	private MenuItemDAO menuItemDAO;
	@Autowired
	private SendMessageService sendMessageService;
	@Autowired
	private MessengerService messengerService;

	private static final int LIMIT = 3;

	public boolean createIfNotExist(UserId chatId) {
		Customer customer = customerDAO.findByChatId(chatId.getId());
		if (customer == null) {
			customer = new Customer();
			customer.setChatId(chatId.getId());
			User user = messengerService.getProfileInfo(chatId.getId(), true);
			customer.setFirstName(user.getFirstName());
			customer.setLastName(user.getLastName());
			customerDAO.save(customer);
			sendMessageService.sendSimpleMessage(chatId, "Welcome to CheckPlease", true);
			return true;
		}
		return false;
	}

	public void addCustomerToTable(Restaurant restaurant, Customer customer, Integer tableNumber) {
		Table table = tableDAO.findByRestaurantAndNumber(restaurant, tableNumber);
		UserId userId = new UserId(customer.getChatId());
		if (table == null) {
			sendMessageService.sendSimpleMessage(userId, "Wrong code", true);
			return;
		}
		TableCustomer tableCustomer = tableCustomerDAO.findByCustomerAndIsActive(customer, true);
		if (tableCustomer != null && tableCustomer.getTable().getId() == table.getId()) {
			sendMessageService.sendSimpleMessage(userId, "You're already connected to your waiter", true);
			return;
		}
		if (tableCustomer == null) {
			tableCustomer = new TableCustomer();
		}
		tableCustomer.setCameTime(LocalDateTime.now());
		tableCustomer.setCustomer(customer);
		tableCustomer.setIsActive(true);
		tableCustomer.setTable(table);
		tableCustomerDAO.save(tableCustomer);
		sendMessageService.sendSimpleMessage(userId, "You can write to your waiter", true);

	}

	public void writeToWaiter(Customer customer, String text) {
		TableCustomer tableCustomer = tableCustomerDAO.findByCustomerAndIsActive(customer, true);
		UserId customerId = new UserId(customer.getChatId());
		if (tableCustomer != null) {
			UserId waiterId = new UserId(tableCustomer.getTable().getWaiter().getChatId());
			sendMessageService.sendSimpleMessage(waiterId, "T" + tableCustomer.getTable().getNumber() + ": " + text,
					false);
		} else {
			sendMessageService.sendSimpleMessage(customerId,
					"Sorry, but you should send us the code of your table for comunicating with your waiter", true);
		}
	}

	public void showMenu(Customer customer, int page) {
		TableCustomer tableCustomer = tableCustomerDAO.findByCustomerAndIsActive(customer, true);
		UserId customerId = new UserId(customer.getChatId());
		if (tableCustomer == null) { // TODO: change message
			sendMessageService.sendSimpleMessage(customerId, "Please send us the table code.", true);
		} else {
			PageRequest pageRequest = new PageRequest(page, LIMIT);
			List<MenuItem> menuItems = menuItemDAO.findByRestaurant(tableCustomer.getTable().getRestaurant(),
					pageRequest);
			sendMessageService.sendGenericMessages(customerId,
					ToMessageElementTransformator.transformMenuItem(menuItems, LIMIT, ++page), true);
		}
	}

	public void showMenuItemDescription(Customer customer, int menuItemId) {
		MenuItem menuItem = menuItemDAO.findOne(menuItemId);
		sendMessageService.sendSimpleMessage(new UserId(customer.getChatId()), menuItem.getDescription(), true);
	}

	public void sendMenuItemOrder(Customer customer, int menuItemId) {
		MenuItem menuItem = menuItemDAO.findOne(menuItemId);
		writeToWaiter(customer, menuItem.getName());
		sendMessageService.sendSimpleMessage(new UserId(customer.getChatId()), "Your order was sent to the waiter",
				true);
	}
}
