package com.angelhack.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelhack.entity.Restaurant;
import com.angelhack.entity.Waiter;

public interface WaiterDAO extends JpaRepository<Waiter, Integer> {
	
	public List<Waiter> findByRestaurant(Restaurant restaurant);
	

}
