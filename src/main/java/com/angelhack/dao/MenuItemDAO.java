package com.angelhack.dao;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.angelhack.entity.MenuItem;
import com.angelhack.entity.Restaurant;

public interface MenuItemDAO extends JpaRepository<MenuItem, Integer> {
	List<MenuItem> findByRestaurant(Restaurant restaurant, Pageable pageable);
}
