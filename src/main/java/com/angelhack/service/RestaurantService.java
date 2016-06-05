package com.angelhack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.angelhack.dao.MenuCategoryDAO;
import com.angelhack.dao.MenuItemDAO;
import com.angelhack.dao.PreOrderDAO;
import com.angelhack.dao.RestaurantDAO;
import com.angelhack.entity.Customer;
import com.angelhack.entity.MenuCategory;
import com.angelhack.entity.MenuItem;
import com.angelhack.entity.Preorder;
import com.angelhack.entity.Restaurant;
import com.angelhack.model.UserId;
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

	public void addToOrder(Integer menuItemId, Customer customer) {
		MenuItem menuItem = menuItemDAO.findOne(menuItemId);

		Preorder preorder = preOrderDAO.findByCustomerAndRestaurantAndIsActive(customer,
				menuItem.getCategory().getRestaurant(), true);
		if (preorder == null) {
			preorder = new Preorder();
			preorder.setCustomer(customer);
			preorder.setIsActive(true);
			preorder.setRestaurant(menuItem.getCategory().getRestaurant());
		}
		preorder.getItems().add(menuItem);
		// preorder.getItems().stream().
	}

}
