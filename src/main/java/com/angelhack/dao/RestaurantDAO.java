package com.angelhack.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelhack.entity.Restaurant;

public interface RestaurantDAO extends JpaRepository<Restaurant, Integer> {
	Restaurant findByCode(String code);
}
