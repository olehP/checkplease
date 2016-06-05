package com.angelhack.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelhack.entity.Customer;
import com.angelhack.entity.Preorder;
import com.angelhack.entity.Restaurant;

public interface PreOrderDAO extends JpaRepository<Preorder, Integer> {
	Preorder findByCustomerAndRestaurantAndIsActive(Customer customer, Restaurant restaurant, Boolean isActive);
}
