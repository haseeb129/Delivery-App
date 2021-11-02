package com.gotmovers.emailmicroservice.messagequeue;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.gotmovers.emailmicroservice.model.Email;
import com.gotmovers.emailmicroservice.service.EmailService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EmailQueueListener {

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private Gson gson;

    @Autowired
    private EmailService emailService;


    @RabbitListener(queues = "SimpleEmailQueue")
    public void emailQueueHandler(String message){
        objectMapper.enable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT);
        objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT,true);
        Email email = gson.fromJson(message, Email.class);
        emailService.sendSimpleMessage(email.getTo(), email.getSubject(), email.getBody());
    }

}
