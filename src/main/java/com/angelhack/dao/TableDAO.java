package com.angelhack.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelhack.entity.Table;

public interface TableDAO extends JpaRepository<Table, Integer> {

	
	public List<Table>getTableByRestaurant(int restaurantId);
	
	public Table getTableById(int tableId);
	
	
}
