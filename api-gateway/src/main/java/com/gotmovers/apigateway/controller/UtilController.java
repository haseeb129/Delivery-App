package com.gotmovers.apigateway.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class UtilController {

    @GetMapping("/greetings")
    public String greetings() {
        return "Hello World!";
    }

    @GetMapping("/heartbeat")
    public String heartcheck() {
        return "Bip Bip Bop Bop!!";
    }

    @GetMapping("/admin")
    public String adminTest(){
        return "admin";
    }
    @GetMapping("/customer")
    public String custTest(){
        return "customer";
    }
    @GetMapping("/mover")
    public String movTest(){
        return "mover";
    }
}
