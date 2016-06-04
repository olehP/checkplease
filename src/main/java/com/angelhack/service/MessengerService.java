package com.angelhack.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.angelhack.model.incomming.User;

@Service
public class MessengerService {
	@Value("${facebook.profile.url}")
	private String profileUrl;
	@Value("${facebook.messaging.token.customer}")
	private String customerToken;
	@Value("${facebook.messaging.token.admin}")
	private String adminToken;

	@Autowired
	private RestTemplate restTemplate;

	public User getProfileInfo(String userId, boolean isCustomer) {
		String url = profileUrl.replace("$user_id$", userId) + getToken(isCustomer);
		return restTemplate.getForObject(url, User.class);
	}

	private String getToken(boolean isCustomer) {
		if (isCustomer) {
			return customerToken;
		}
		return adminToken;
	}

}
