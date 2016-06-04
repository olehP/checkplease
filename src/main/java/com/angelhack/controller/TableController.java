package com.angelhack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.angelhack.entity.Table;
import com.angelhack.service.TableService;

@Controller
public class TableController {
	
	@Autowired
	TableService tableService;
	
	
	@RequestMapping(value="/table", params = {"restaurant_id"}, method = RequestMethod.GET)
	public @ResponseBody List<Table> getTablesInJSON(@RequestParam(value = "restaurant_id") int restaurantId) {
		return tableService.getTablesForRestaurant(restaurantId);
	}
	
	
	@RequestMapping(value="/table/{id}", method = RequestMethod.GET)
	public @ResponseBody Table getTableInJSON(@PathVariable int id) {	
		return tableService.getTableById(id);

	}
	
	@RequestMapping(value="/table/{id}", method = RequestMethod.PUT)
	public @ResponseBody void updateTableJSON(@RequestBody Table table){
		tableService.updateTable(table);
	}
	
	@RequestMapping(value="/table/{id}", method = RequestMethod.POST)
	public @ResponseBody void addTableJSON(@RequestBody Table table){
		tableService.addTable(table);
	}
	
	
	
	
}
