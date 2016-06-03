package com.angelhack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.angelhack.model.UserId;
import com.angelhack.model.outgoing.buttons.ButtomTemplateRequest;
import com.angelhack.model.outgoing.generic.Button;
import com.angelhack.model.outgoing.generic.MessageElement;
import com.angelhack.model.outgoing.generic.MessageRequest;
import com.angelhack.model.outgoing.simple.SimpleMessage;
import com.angelhack.model.outgoing.simple.SimpleMessageRequest;

@Service
public class SendMessageService {
	@Value("${facebook.messaging.url}")
	private String MESSAGING_URL;
	@Autowired
	private RestTemplate restTemplate;

	public void sendSimpleMessage(UserId recipient, String text) {
		SimpleMessageRequest request = new SimpleMessageRequest();
		request.setRecipient(recipient);
		SimpleMessage message = new SimpleMessage();
		message.setText(text);
		request.setMessage(message);
		restTemplate.postForObject(MESSAGING_URL, request, String.class);
	}

	public void sendGenericMessages(UserId recipient, List<MessageElement> elements) {
		MessageRequest messageRequest = MessageRequest.getBuilder().elements(elements).recipient(recipient).build();
		restTemplate.postForObject(MESSAGING_URL, messageRequest, String.class);
	}

	public void sendButtonsMessage(UserId recipient, List<Button> buttons, String text) {
		ButtomTemplateRequest request = ButtomTemplateRequest.getBuilder().buttons(buttons).text(text)
				.recipient(recipient).build();
		restTemplate.postForObject(MESSAGING_URL, request, String.class);

	}

}
