package com.angelhack.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelhack.entity.MenuCategory;
import com.angelhack.entity.Restaurant;

public interface MenuCategoryDAO extends JpaRepository<MenuCategory, Integer> {
	List<MenuCategory> findByRestaurant(Restaurant restaurant);
}
