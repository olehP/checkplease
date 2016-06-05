package com.angelhack.message.processor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angelhack.dao.RestaurantDAO;
import com.angelhack.dao.WaiterDAO;
import com.angelhack.entity.Restaurant;
import com.angelhack.entity.Waiter;
import com.angelhack.model.UserId;
import com.angelhack.model.incomming.MessageRecieved;
import com.angelhack.model.incomming.Messaging;
import com.angelhack.service.SendMessageService;
import com.angelhack.service.WaiterService;
import com.angelhack.util.Postbacks;

@Service
public class AdminMessageProcessor {
	@Autowired
	private WaiterService waiterService;
	@Autowired
	private SendMessageService sendMessageService;
	@Autowired
	private WaiterDAO waiterDAO;
	@Autowired
	private RestaurantDAO restaurantDAO;

	public void processMessage(MessageRecieved message) {
		Messaging messaging = message.getEntry().get(0).getMessaging().get(0);
		if (!waiterService.createIfNotExist(messaging.getSender())) {
			Waiter waiter = waiterDAO.findByChatId(messaging.getSender().getId());
			if (messaging.getMessage() != null && messaging.getMessage().getText() != null) {
				processTextMessage(messaging.getMessage().getText(), waiter);
			} else if (messaging.getPostback() != null && messaging.getPostback().getPayload() != null) {
				processPayload(waiter, messaging.getPostback().getPayload());
			}
		}
	}

	private void processPayload(Waiter waiter, String payload) {
		if (payload.startsWith(Postbacks.ADMIN_CONFIRM)) {
			int orderId = Integer.parseInt(payload.substring(payload.indexOf('_') + 1));
			waiterService.confirmOrder(orderId);
		} else if (payload.startsWith(Postbacks.ADMIN_REJECT)) {
			int orderId = Integer.parseInt(payload.substring(payload.indexOf('_') + 1));
			waiterService.rejectOrder(orderId);
		}
	}

	private void processTextMessage(String text, Waiter waiter) {

		Restaurant restaurant = restaurantDAO.findByCode(text);
		UserId userId = new UserId(waiter.getChatId());
		if (restaurant == null) {
			sendMessageService.sendSimpleMessage(userId, "Wrong code", false);
		} else {
			waiter.setRestaurant(restaurant);
			waiter.setIsActive(false);
			waiterDAO.save(waiter);
			sendMessageService.sendSimpleMessage(userId, "Your request was sent", false);
		}
	}
}
