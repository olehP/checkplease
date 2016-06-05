package com.angelhack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.angelhack.entity.Restaurant;
import com.angelhack.service.RestaurantService;

@RestController
public class RestaurantController {
	@Autowired
	private RestaurantService restaurantService;

	@RequestMapping(value = "/restaurant/{id}", method = RequestMethod.GET)
	public ResponseEntity<Restaurant> getRestaurantInJSON(@PathVariable int id) {
		return ResponseEntity.ok().header("Access-Control-Allow-Origin", "http://localhost")
				.body(restaurantService.getById(id));
	}

	@RequestMapping(value = "/restaurant/{id}", method = RequestMethod.PUT)
	public void updateRestaurantJSON(@RequestBody Restaurant restaurant) {
		restaurantService.updateRestaurant(restaurant);
	}

	@RequestMapping(value = "/restaurant", method = RequestMethod.OPTIONS)
	public void addRestaurantJSON(@RequestBody Restaurant restaurant) {
		restaurantService.addRestaurant(restaurant);
	}

}
