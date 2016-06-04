package com.angelhack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.angelhack.entity.Waiter;
import com.angelhack.service.WaiterService;

@Controller
public class WaiterController {

	@Autowired
	private WaiterService waiterService;
	
	
	@RequestMapping(value="/waiter", params = {"restaurant_id"}, method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<List<Waiter>> getWaitersInJSON(@RequestParam(value = "restaurant_id") int restaurantId) {
		return ResponseEntity.ok().header("Access-Control-Allow-Origin", "http://localhost").body(waiterService.getByRestaurantId(restaurantId));
	}
	
	
	@RequestMapping(value="/waiter/{id}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<Waiter> getWaiterInJSON(@PathVariable int id) {	
		return ResponseEntity.ok().header("Access-Control-Allow-Origin", "http://localhost").body(waiterService.getById(id));

	}
	@RequestMapping(value="/waiter/{id}", method = RequestMethod.PUT)
	public @ResponseBody void updateWaiterJSON(@RequestBody Waiter waiter) {	
		waiterService.updateWaiter(waiter);
	}
	
	@RequestMapping(value="/waiter/{id}", method = RequestMethod.DELETE)
	public @ResponseBody void remoweWaiterJSON(@PathVariable int id) {	
		waiterService.removeWaiter(id);
	}
	
}
