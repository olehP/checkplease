package com.angelhack.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.angelhack.dao.CustomerDAO;
import com.angelhack.dao.MenuCategoryDAO;
import com.angelhack.dao.MenuItemDAO;
import com.angelhack.dao.PreOrderDAO;
import com.angelhack.dao.RestaurantDAO;
import com.angelhack.dao.WaiterDAO;
import com.angelhack.entity.ChatState;
import com.angelhack.entity.Customer;
import com.angelhack.entity.MenuCategory;
import com.angelhack.entity.MenuItem;
import com.angelhack.entity.Preorder;
import com.angelhack.entity.Restaurant;
import com.angelhack.entity.Waiter;
import com.angelhack.model.UserId;
import com.angelhack.model.outgoing.generic.Button;
import com.angelhack.util.Postbacks;
import com.angelhack.util.ToMessageElementTransformator;

@Service
public class RestaurantService {
	@Autowired
	private RestaurantDAO restaurantDAO;
	@Autowired
	private MenuCategoryDAO menuCategoryDAO;
	@Autowired
	private MenuItemDAO menuItemDAO;
	@Autowired
	private PreOrderDAO preOrderDAO;
	@Autowired
	private CustomerDAO customerDAO;
	@Autowired
	private WaiterDAO waiterDAO;
	@Autowired
	private SendMessageService sendMessageService;

	public Restaurant getById(int id) {
		return restaurantDAO.findOne(id);
	}

	public void addRestaurant(Restaurant restaurant) {
		restaurantDAO.save(restaurant);
	}

	public void updateRestaurant(Restaurant restaurant) {
		restaurantDAO.save(restaurant);
	}

	public void showRestaurants(Customer customer, int page) {
		List<Restaurant> restaurants = restaurantDAO.findAll(new PageRequest(page, 10)).getContent();
		sendMessageService.sendGenericMessages(new UserId(customer.getChatId()),
				ToMessageElementTransformator.transformFromRestaurants(restaurants, CustomerService.LIMIT, ++page),
				true);
	}

	public void showMenuCategories(Integer restaurantId, Customer customer) {
		Restaurant restaurant = restaurantDAO.findOne(restaurantId);
		List<MenuCategory> categories = menuCategoryDAO.findByRestaurant(restaurant);
		sendMessageService.sendGenericMessages(new UserId(customer.getChatId()),
				ToMessageElementTransformator.transformFromCategories(categories), true);
	}

	public void showDishes(Integer categoryId, Customer customer) {
		MenuCategory category = menuCategoryDAO.findOne(categoryId);
		List<MenuItem> menuItems = menuItemDAO.findByCategory(category);
		sendMessageService.sendGenericMessages(new UserId(customer.getChatId()),
				ToMessageElementTransformator.transformMenuItem(menuItems), true);
	}

	@Transactional
	public void addToOrder(Integer menuItemId, Customer customer) {
		MenuItem menuItem = menuItemDAO.findOne(menuItemId);

		Preorder preorder = preOrderDAO.findByCustomerAndIsActive(customer, true);
		if (preorder == null) {
			preOrderDAO.cancelActiveOrders(customer.getId());
			preorder = new Preorder();
			preorder.setCustomer(customer);
			preorder.setIsActive(true);
			preorder.setRestaurant(menuItem.getCategory().getRestaurant());
		}
		preorder.getItems().add(menuItem);
		preOrderDAO.save(preorder);

		Map<String, Integer> orderMap = new HashMap<>();
		for (MenuItem item : preorder.getItems()) {
			if (!orderMap.containsKey(item.getName())) {
				orderMap.put(item.getName(), 1);
			} else {
				orderMap.put(item.getName(), orderMap.get(item.getName()) + 1);
			}
		}
		String orderMessage = "Yor current order: ";
		for (Entry<String, Integer> entry : orderMap.entrySet()) {
			orderMessage += entry.getKey() + " " + entry.getValue() + "x, ";
		}
		orderMessage = orderMessage.substring(0, orderMessage.length() - 2);
		orderMessage += ". You can add more dishes from the menu above.";
		List<Button> buttons = new ArrayList<Button>();
		buttons.add(Button.createPostbackButton("Cancel order", Postbacks.CANCEL_ORDER + preorder.getId()));
		buttons.add(Button.createPostbackButton("Confirm order", Postbacks.CONFIRM_ORDER + preorder.getId()));
		sendMessageService.sendButtonsMessage(new UserId(customer.getChatId()), buttons, orderMessage, true);
	}

	public void cancelOrder(Customer customer, int preorderId) {
		Preorder preorder = preOrderDAO.findOne(preorderId);
		preorder.setIsActive(false);
		preOrderDAO.save(preorder);
		sendMessageService.sendSimpleMessage(new UserId(customer.getChatId()), "Your order was canceled.", true);
	}

	public void confirmOrder(Customer customer) {
		customer.setState(ChatState.COMMENT);
		customerDAO.save(customer);
		sendMessageService.sendSimpleMessage(new UserId(customer.getChatId()),
				"Please write us when you will be in the restaurant and any additional wishes to the order.", true);
	}

	@Transactional
	public void sendOrder(String comment, Customer customer) {
		Preorder preorder = preOrderDAO.findByCustomerAndIsActive(customer, true);
		customer.setState(ChatState.ANY);
		customerDAO.save(customer);
		if (preorder == null) {
			return;
		}
		preorder.setComment(comment);
		preorder.setIsActive(false);
		preOrderDAO.save(preorder);
		Map<String, Integer> orderMap = new HashMap<>();
		for (MenuItem item : preorder.getItems()) {
			if (!orderMap.containsKey(item.getName())) {
				orderMap.put(item.getName(), 1);
			} else {
				orderMap.put(item.getName(), orderMap.get(item.getName()) + 1);
			}
		}
		String orderMessage = customer.getFirstName() + " " + customer.getLastName() + " ordered: ";
		for (Entry<String, Integer> entry : orderMap.entrySet()) {
			orderMessage += entry.getKey() + " " + entry.getValue() + "x, ";
		}
		orderMessage = orderMessage.substring(0, orderMessage.length() - 2);
		orderMessage += " . Comment: " + comment;
		Waiter waiter = waiterDAO.findByRestaurant(preorder.getRestaurant()).get(0);
		List<Button> buttons = new ArrayList<>();
		buttons.add(Button.createPostbackButton("Confirm", Postbacks.ADMIN_CONFIRM + preorder.getId()));
		buttons.add(Button.createPostbackButton("Reject", Postbacks.ADMIN_REJECT + preorder.getId()));
		sendMessageService.sendButtonsMessage(new UserId(waiter.getChatId()), buttons, orderMessage, false);
		sendMessageService.sendSimpleMessage(new UserId(customer.getChatId()), "Your order was sent.", true);
	}

}
