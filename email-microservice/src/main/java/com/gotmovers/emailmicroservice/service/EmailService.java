package com.gotmovers.emailmicroservice.service;

public interface EmailService {
     String sendSimpleMessage(String to, String from, String subject, String text);
     String sendSimpleMessage(String to, String subject, String text);
}
