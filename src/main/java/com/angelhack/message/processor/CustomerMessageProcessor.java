package com.angelhack.message.processor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angelhack.dao.CustomerDAO;
import com.angelhack.dao.RestaurantDAO;
import com.angelhack.entity.Customer;
import com.angelhack.entity.Restaurant;
import com.angelhack.model.incomming.MessageRecieved;
import com.angelhack.model.incomming.Messaging;
import com.angelhack.service.CustomerService;
import com.angelhack.util.NumberUtil;

@Service
public class CustomerMessageProcessor {
	@Autowired
	private CustomerService customerService;
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
				// processPayload(user, messaging.getPostback().getPayload());
			}
		}
	}

	private void processTextMessage(String text, Customer customer) {
		if (text.indexOf('_') > 0) {
			Restaurant restaurant = restaurantDAO.findByCode(text.substring(0, text.lastIndexOf(' ')));
			Integer tableNumber = NumberUtil.tryParseInteger(text.substring(text.lastIndexOf(' ')));
			if (restaurant != null && tableNumber != null) {
				customerService.addCustomerToTable(restaurant, customer, tableNumber);
			}
		}
	}
}
