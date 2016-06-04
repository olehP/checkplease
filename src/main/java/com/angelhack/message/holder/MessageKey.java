package com.angelhack.message.holder;

public enum MessageKey {
	WELCOME("message.welcome");
	private String value;

	public String value() {
		return value;
	}

	private MessageKey(String value) {
		this.value = value;
	}
}
