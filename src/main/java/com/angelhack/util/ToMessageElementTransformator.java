package com.angelhack.util;

import java.util.ArrayList;
import java.util.List;

import com.angelhack.entity.MenuCategory;
import com.angelhack.entity.MenuItem;
import com.angelhack.entity.Restaurant;
import com.angelhack.model.outgoing.generic.Button;
import com.angelhack.model.outgoing.generic.MessageElement;

public class ToMessageElementTransformator {
	public static List<MessageElement> transformMenuItem(List<MenuItem> menuItems) {
		List<MessageElement> result = new ArrayList<>();
		menuItems.forEach(item -> {
			MessageElement element = new MessageElement();
			element.setImageUrl(item.getPhoto());
			element.setTitle(item.getName());
			element.setSubtitle(item.getPrice() + "грн");
			List<Button> buttons = new ArrayList<>();
			element.setButtons(buttons);
			buttons.add(Button.createPostbackButton("Add to order", Postbacks.ADD_TO_ORDER + item.getId()));
			buttons.add(Button.createPostbackButton("Description", Postbacks.DESCRIPTION + item.getId()));
			result.add(element);
		});
		return result;
	}

	public static List<MessageElement> transformFromRestaurants(List<Restaurant> restaurants, int limit, int page) {
		List<MessageElement> result = new ArrayList<>();
		restaurants.forEach(item -> {
			MessageElement element = new MessageElement();
			element.setImageUrl(item.getPhoto());
			element.setTitle(item.getName());
			element.setSubtitle(item.getDescription());
			List<Button> buttons = new ArrayList<>();
			element.setButtons(buttons);
			buttons.add(Button.createPostbackButton("Menu", Postbacks.MENU + item.getId()));
			result.add(element);
		});
		if (result.size() == limit) {
			result.get(limit - 1).getButtons()
					.add(Button.createPostbackButton("Next restaurants", Postbacks.NEXTRESTAURANTS + page));
		}
		return result;
	}

	public static List<MessageElement> transformFromCategories(List<MenuCategory> categories) {
		List<MessageElement> result = new ArrayList<>();
		categories.forEach(item -> {
			MessageElement element = new MessageElement();
			element.setImageUrl(item.getPhoto());
			element.setTitle(item.getName());
			List<Button> buttons = new ArrayList<>();
			element.setButtons(buttons);
			buttons.add(Button.createPostbackButton("Dishes", Postbacks.DISHES + item.getId()));
			result.add(element);
		});
		return result;
	}
}
