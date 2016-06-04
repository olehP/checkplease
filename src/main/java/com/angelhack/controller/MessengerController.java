package com.angelhack.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.angelhack.model.incomming.MessageRecieved;

@RestController
public class MessengerController {

	@RequestMapping(value = "customer/message", method = RequestMethod.POST)
	private void customerMessaeg(@RequestBody(required = false) MessageRecieved messageRecieved) {
		// TODO: add message processing
	}

	@RequestMapping(value = "customer/message", method = RequestMethod.GET)
	private String customerCheck(@RequestParam(name = "hub.challenge") String challenge) {
		return challenge;
	}

	@RequestMapping(value = "admin/message", method = RequestMethod.POST)
	private void adminMessage(@RequestBody(required = false) MessageRecieved messageRecieved) {
		// TODO: add message processing
	}

	@RequestMapping(value = "admin/message", method = RequestMethod.GET)
	private String adminCheck(@RequestParam(name = "hub.challenge") String challenge) {
		return challenge;
	}

}
