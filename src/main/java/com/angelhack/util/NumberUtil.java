package com.angelhack.util;

public class NumberUtil {
	public static Integer tryParseInteger(String value) {
		try {
			return Integer.parseInt(value);
		} catch (NumberFormatException e) {
			return null;
		}
	}
}
