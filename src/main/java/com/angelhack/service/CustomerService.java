package com.angelhack.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angelhack.dao.CustomerDAO;
import com.angelhack.dao.TableCustomerDAO;
import com.angelhack.dao.TableDAO;
import com.angelhack.entity.Customer;
import com.angelhack.entity.Restaurant;
import com.angelhack.entity.Table;
import com.angelhack.entity.TableCustomer;
import com.angelhack.message.holder.MessageKey;
import com.angelhack.message.holder.MessagesHolder;
import com.angelhack.model.UserId;

@Service
public class CustomerService {
	@Autowired
	private CustomerDAO customerDAO;
	@Autowired
	private TableCustomerDAO tableCustomerDAO;
	@Autowired
	private TableDAO tableDAO;
	@Autowired
	private SendMessageService sendMessageService;
	@Autowired
	private MessagesHolder messagesHolder;

	public boolean createIfNotExist(UserId chatId) {
		Customer customer = customerDAO.findByChatId(chatId.getId());
		if (customer == null) {
			customer = new Customer();
			customer.setChatId(chatId.getId());
			customerDAO.save(customer);
			sendMessageService.sendSimpleMessage(chatId, messagesHolder.getMessage(MessageKey.WELCOME));
			return true;
		}
		return false;
	}

	public void addCustomerToTable(Restaurant restaurant, Customer customer, Integer tableNumber) {
		Table table = tableDAO.findByRestaurantAndNumber(restaurant, tableNumber);
		UserId userId = new UserId(customer.getChatId());
		if (table == null) {
			sendMessageService.sendSimpleMessage(userId, "Wrong code");
			return;
		}
		TableCustomer tableCustomer = tableCustomerDAO.fidnByCustomerAndIsActive(customer, true);
		if (tableCustomer != null && tableCustomer.getTable().getId() == table.getId()) {
			sendMessageService.sendSimpleMessage(userId, "You're already connected to your waiter");
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
		sendMessageService.sendSimpleMessage(userId, "You can write to your waiter");

	}
}
