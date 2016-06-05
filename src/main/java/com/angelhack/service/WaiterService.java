package com.angelhack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angelhack.dao.PreOrderDAO;
import com.angelhack.dao.RestaurantDAO;
import com.angelhack.dao.WaiterDAO;
import com.angelhack.entity.Preorder;
import com.angelhack.entity.Restaurant;
import com.angelhack.entity.Waiter;
import com.angelhack.model.UserId;
import com.angelhack.model.incomming.User;

@Service
public class WaiterService {
	@Autowired
	private WaiterDAO waiterDAO;
	@Autowired
	private RestaurantDAO restaurantDAO;
	@Autowired
	private PreOrderDAO preOrderDAO;
	@Autowired
	private MessengerService messengerService;
	@Autowired
	private SendMessageService sendMessageService;

	public boolean createIfNotExist(UserId chatId) {
		Waiter waiter = waiterDAO.findByChatId(chatId.getId());
		if (waiter == null) {
			waiter = new Waiter();
			waiter.setChatId(chatId.getId());
			User user = messengerService.getProfileInfo(chatId.getId(), false);
			waiter.setFirstName(user.getFirstName());
			waiter.setLastName(user.getLastName());
			waiter.setProfilePic(user.getProfilePic());
			waiterDAO.save(waiter);
			sendMessageService.sendSimpleMessage(chatId, "Welcome to CheckPlease Bot", false);
			return true;
		}
		return false;
	}

	public Waiter getById(int id) {
		return waiterDAO.findOne(id);
	}

	public List<Waiter> getByRestaurantId(int id) {

		Restaurant restaurant = restaurantDAO.findOne(id);
		return waiterDAO.findByRestaurant(restaurant);
	}

	public void updateWaiter(Waiter waiter) {
		waiterDAO.save(waiter);
	}

	public void removeWaiter(int id) {
		waiterDAO.delete(id);
	}

	public void confirmOrder(Integer orderId) {
		Preorder preorder = preOrderDAO.findOne(orderId);
		sendMessageService.sendSimpleMessage(new UserId(preorder.getCustomer().getChatId()),
				"Your order was confirmed by administrator of " + preorder.getRestaurant().getName(), true);
	}

	public void rejectOrder(Integer orderId) {
		Preorder preorder = preOrderDAO.findOne(orderId);
		sendMessageService.sendSimpleMessage(new UserId(preorder.getCustomer().getChatId()),
				"Sorry, restaurant " + preorder.getRestaurant().getName() + "cannot confirm your order right now.",
				true);
	}

}
