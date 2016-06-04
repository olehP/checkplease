package com.angelhack.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angelhack.dao.RestaurantDAO;
import com.angelhack.entity.Restaurant;

@Service
public class RestaurantService {
	@Autowired
	RestaurantDAO restaurantDAO;
	
	public Restaurant getById(int id){
		return restaurantDAO.findOne(id);
	}
	
	public void addRestaurant(Restaurant restaurant){
		restaurantDAO.save(restaurant);		
	}
	

}
