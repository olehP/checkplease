package com.angelhack.holder;

import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

public class UserContextHolder {
	public static Map<String, String> USER_CONTEXT = new ConcurrentHashMap<>();

	public static String generateToken() {
		return UUID.randomUUID().toString();
	}
}
