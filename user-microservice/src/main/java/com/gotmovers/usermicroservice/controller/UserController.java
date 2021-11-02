package com.gotmovers.usermicroservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.gotmovers.usermicroservice.bean.JwtResponse;
import com.gotmovers.usermicroservice.exception.*;
import com.gotmovers.usermicroservice.messagequeue.EmailSender;
import com.gotmovers.usermicroservice.model.Email;
import com.gotmovers.usermicroservice.model.User;
import com.gotmovers.usermicroservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class UserController {

    @Autowired
    private EmailSender emailSender;

    @Autowired
    private UserService userService;

    @GetMapping("/heartbeat")
    public String heartbeat(){
        return "Bip Bip Bop Bop!";
    }

    @GetMapping("/greetings")
    public String greetings(){
        return "Hello from Users.";
    }

    @GetMapping("/list")
    public Iterable<User> listAllUsers(){
        return userService.listAllUsers();
    }

    @PostMapping("/auth/signup")
    public ResponseEntity<?> Signup(@Valid @RequestBody User user) throws AlreadyExistException, InvalidRoleException {
        return userService.Signup(user);
    }

    @PostMapping("/auth/login")
    public ResponseEntity<JwtResponse> login(@RequestBody User user) throws LoginFailedException, UserNotEnabledException {
        return ResponseEntity.ok(userService.login(user));
    }

    @GetMapping("/auth/activate/")
    public ResponseEntity<?> enablingUserWithToken(@RequestParam String token) throws InvalidActivationToken, VerificationTokenHasBeenExpired {
        return userService.enableUserWithToken(token);
    }

    @GetMapping("/getbyemail/{user-email}")
    public User getUserByEmail(@PathVariable("user-email") String userEmail){
        return userService.getUserByEmail(userEmail);
    }

    @PutMapping("/auth/generate/")
    public ResponseEntity<?> generateVerificationToken(@RequestParam String email){
        return userService.reGenerateVerificationToken(email);
    }

    @GetMapping("/message")
    public String mss(@RequestParam String msg) throws JsonProcessingException {
        emailSender.pushEmailToQueue(new Email(msg,msg,msg,msg));
        return msg;
    }

}
