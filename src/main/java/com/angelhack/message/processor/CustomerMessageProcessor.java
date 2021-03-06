package com.angelhack.message.processor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angelhack.dao.CustomerDAO;
import com.angelhack.dao.RestaurantDAO;
import com.angelhack.entity.ChatState;
import com.angelhack.entity.Customer;
import com.angelhack.entity.Restaurant;
import com.angelhack.model.incomming.MessageRecieved;
import com.angelhack.model.incomming.Messaging;
import com.angelhack.service.CustomerService;
import com.angelhack.service.RestaurantService;
import com.angelhack.util.NumberUtil;
import com.angelhack.util.Postbacks;

@Service
public class CustomerMessageProcessor {
	@Autowired
	private CustomerService customerService;
	@Autowired
	private RestaurantService restaurantService;
	@Autowired
	private CustomerDAO customerDAO;
	@Autowired
	private RestaurantDAO restaurantDAO;

	public void processMessage(MessageRecieved message) {
		Messaging messaging = message.getEntry().get(0).getMessaging().get(0);
		if (!customerService.createIfNotExist(messaging.getSender())) {
			Customer customer = customerDAO.findByChatId(messaging.getSender().getId());
			if (messaging.getMessage() != null && messaging.getMessage().getText() != null) {
				processTextMessage(messaging.getMessage().getText(), customer);
			} else if (messaging.getPostback() != null && messaging.getPostback().getPayload() != null) {
				processPayload(customer, messaging.getPostback().getPayload());
			}
		}
	}

	private void processPayload(Customer customer, String payload) {
		if (payload.startsWith(Postbacks.DESCRIPTION)) {
			int menuItemId = Integer.parseInt(payload.substring(payload.indexOf('_') + 1));
			customerService.showMenuItemDescription(customer, menuItemId);
		} else if (payload.startsWith(Postbacks.ORDER)) {
			int menuItemId = Integer.parseInt(payload.substring(payload.indexOf('_') + 1));
			customerService.sendMenuItemOrder(customer, menuItemId);
		} else if (payload.startsWith(Postbacks.NEXTRESTAURANTS)) {
			int nextPage = Integer.parseInt(payload.substring(payload.indexOf('_') + 1));
			restaurantService.showRestaurants(customer, nextPage);
		} else if (payload.startsWith(Postbacks.MENU)) {
			int restaurantId = Integer.parseInt(payload.substring(payload.indexOf('_') + 1));
			restaurantService.showMenuCategories(restaurantId, customer);
		} else if (payload.startsWith(Postbacks.DISHES)) {
			int categoryId = Integer.parseInt(payload.substring(payload.indexOf('_') + 1));
			restaurantService.showDishes(categoryId, customer);
		} else if (payload.startsWith(Postbacks.ADD_TO_ORDER)) {
			int menuItemId = Integer.parseInt(payload.substring(payload.indexOf('_') + 1));
			restaurantService.addToOrder(menuItemId, customer);
		} else if (payload.startsWith(Postbacks.CANCEL_ORDER)) {
			int preorderId = Integer.parseInt(payload.substring(payload.indexOf('_') + 1));
			restaurantService.cancelOrder(customer, preorderId);
		} else if (payload.startsWith(Postbacks.CONFIRM_ORDER)) {
			restaurantService.confirmOrder(customer);
		}
	}

	private void processTextMessage(String text, Customer customer) {
		if (customer.getState() == ChatState.COMMENT) {
			restaurantService.sendOrder(text, customer);
		} else if (text.indexOf('_') > 0) {
			Restaurant restaurant = restaurantDAO.findByCode(text.substring(0, text.lastIndexOf('_')));
			Integer tableNumber = NumberUtil.tryParseInteger(text.substring(text.lastIndexOf('_') + 1));
			if (restaurant != null && tableNumber != null) {
				customerService.addCustomerToTable(restaurant, customer, tableNumber);
			}
		} else if (text.equalsIgnoreCase("restaurants")) {
			restaurantService.showRestaurants(customer, 0);
		} else {
			customerService.writeToWaiter(customer, text);
		}
	}
}
