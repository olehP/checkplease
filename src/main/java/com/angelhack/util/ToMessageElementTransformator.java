package com.angelhack.util;

import java.util.ArrayList;
import java.util.List;

import com.angelhack.entity.MenuItem;
import com.angelhack.model.outgoing.generic.Button;
import com.angelhack.model.outgoing.generic.MessageElement;

public class ToMessageElementTransformator {
	public static List<MessageElement> transformMenuItem(List<MenuItem> menuItems, int maxSize, int nextPage) {
		List<MessageElement> result = new ArrayList<>();
		menuItems.forEach(item -> {
			MessageElement element = new MessageElement();
			element.setImageUrl(item.getPhoto());
			element.setTitle(item.getName());
			element.setSubtitle(item.getPrice() + "$");
			List<Button> buttons = new ArrayList<>();
			element.setButtons(buttons);
			buttons.add(Button.createPostbackButton("Order", Postbacks.ORDER + item.getId()));
			buttons.add(Button.createPostbackButton("Description", Postbacks.DESCRIPTION + item.getId()));
			result.add(element);
		});
		System.out.println(result.size());
		if (result.size() == maxSize) {
			result.get(maxSize - 1).getButtons()
					.add(Button.createPostbackButton("Next dishes", Postbacks.NEXTDISHES + nextPage));
		}
		return result;
	}
}
