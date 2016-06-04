package com.angelhack.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelhack.entity.Restaurant;

public interface RestaurantDAO extends JpaRepository<Restaurant, Integer> {
	
	public Restaurant findById(Integer restaurantId);

}
