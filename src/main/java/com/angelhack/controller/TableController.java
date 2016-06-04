package com.angelhack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.angelhack.service.TableService;

@Controller
public class TableController {

	@Autowired
	TableService tableService;

	//
	// @RequestMapping(value="/tables", params = {"restaurant_id"}, method =
	// RequestMethod.GET)
	// public @ResponseBody List<Table> getTablesInJSON(@RequestParam(value =
	// "restaurant") int restaurantId) {
	// return tableService.getTablesForRestaurant(restaurantId);
	// }
	//
	//
	// @RequestMapping(value="/table/{id}", method = RequestMethod.GET)
	// public @ResponseBody Table getTableInJSON(@PathVariable int id) {
	// return tableService.getTableById(id);
	//
	// }
	//
	//
	//

}
