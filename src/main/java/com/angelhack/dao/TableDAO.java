package com.angelhack.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelhack.entity.Restaurant;
import com.angelhack.entity.Table;

public interface TableDAO extends JpaRepository<Table, Integer> {
	Table findByRestaurantAndNumber(Restaurant restaurant, Number number);

	public List<Table> findByRestaurant(Restaurant restaurant);

	public Table findById(Integer tableId);

}
