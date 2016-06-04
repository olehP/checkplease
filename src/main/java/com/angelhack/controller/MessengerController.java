package com.angelhack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

import com.angelhack.message.processor.AdminMessageProcessor;
import com.angelhack.message.processor.CustomerMessageProcessor;
import com.angelhack.model.incomming.MessageRecieved;

@RestController
public class MessengerController {

	@Autowired
	private CustomerMessageProcessor customerMessageProcessor;
	@Autowired
	private AdminMessageProcessor adminMessageProcessor;

	@RequestMapping(value = "customer/message", method = RequestMethod.POST)
	private void customerMessaeg(@RequestBody(required = false) MessageRecieved messageRecieved) {
		try {
			customerMessageProcessor.processMessage(messageRecieved);
		} catch (HttpClientErrorException e) {
			System.out.println(e.getResponseBodyAsString());
		}
	}

	@RequestMapping(value = "customer/message", method = RequestMethod.GET)
	private String customerCheck(@RequestParam(name = "hub.challenge") String challenge) {
		return challenge;
	}

	@RequestMapping(value = "admin/message", method = RequestMethod.POST)
	private void adminMessage(@RequestBody(required = false) MessageRecieved messageRecieved) {
		adminMessageProcessor.processMessage(messageRecieved);
	}

	@RequestMapping(value = "admin/message", method = RequestMethod.GET)
	private String adminCheck(@RequestParam(name = "hub.challenge") String challenge) {
		return challenge;
	}

}
