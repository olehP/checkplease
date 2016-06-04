package com.angelhack.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angelhack.dao.WaiterDAO;
import com.angelhack.entity.Waiter;
import com.angelhack.model.UserId;
import com.angelhack.model.incomming.User;

@Service
public class WaiterService {
	@Autowired
	private WaiterDAO waiterDAO;
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
}
