package com.angelhack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angelhack.dao.RestaurantDAO;
import com.angelhack.dao.TableDAO;
import com.angelhack.entity.Restaurant;
import com.angelhack.entity.Table;

@Service
public class TableService {
	@Autowired
	private TableDAO tableDAO;
	@Autowired
	private RestaurantDAO restaurantDAO;

	public List<Table> getTablesForRestaurant(int restaurantId) {
		Restaurant restaurant = restaurantDAO.findOne(restaurantId);
		return tableDAO.findByRestaurant(restaurant);
	}

	public Table getTableById(int tableId) {
		return tableDAO.findOne(tableId);
	}

	public void addTable(Table table) {
		tableDAO.save(table);
	}

	public void updateTable(Table table) {
		tableDAO.save(table);
	}

}
