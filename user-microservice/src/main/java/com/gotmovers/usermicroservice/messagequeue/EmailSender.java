package com.gotmovers.usermicroservice.messagequeue;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.gotmovers.usermicroservice.model.Email;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class EmailSender {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    @Qualifier("SimpleEmailQueue")
    private Queue emailQueue;

    @Autowired
    private Gson gson;

    @Autowired
    private ObjectMapper objectMapper;

    public void pushEmailToQueue(Email email) throws JsonProcessingException {
        rabbitTemplate.convertAndSend(emailQueue.getName(), gson.toJson(email));
    }

}
