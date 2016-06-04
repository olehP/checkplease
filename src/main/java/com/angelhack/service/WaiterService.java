package com.angelhack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angelhack.dao.RestaurantDAO;
import com.angelhack.dao.WaiterDAO;
import com.angelhack.entity.Restaurant;
import com.angelhack.entity.Waiter;

@Service
public class WaiterService {
	@Autowired
	WaiterDAO waiterDAO;
	@Autowired
	RestaurantDAO restaurantDAO;
	
	public Waiter getById(int id){
		return waiterDAO.findOne(id);	
	}
	
	public List<Waiter> getByRestaurantId(int id){
		
		Restaurant restaurant = restaurantDAO.findOne(id);
		return  waiterDAO.findByRestaurant(restaurant);	
	}

}
