package com.gotmovers.emailmicroservice.controller;

import com.gotmovers.emailmicroservice.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class HealthController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/heartbeat")
    public String heartBeat(){
        return "Bip Bip Bop Bop!";
    }

    @PostMapping("/sendemail")
    public String sendEmail(@RequestParam String message){

        emailService.sendSimpleMessage("receiver@mydomain.com","sender@mydomain.com", "Hello", message);
        return "done";
    }
}
