package com.gotmovers.usermicroservice.service;

import com.gotmovers.usermicroservice.bean.CustomMessageResponse;
import com.gotmovers.usermicroservice.bean.JwtResponse;
import com.gotmovers.usermicroservice.exception.*;
import com.gotmovers.usermicroservice.model.User;
import org.springframework.http.ResponseEntity;

public interface UserService {
    Iterable<User> listAllUsers();

    ResponseEntity<CustomMessageResponse> Signup(User user) throws AlreadyExistException, InvalidRoleException;

    JwtResponse login(User user) throws LoginFailedException, UserNotEnabledException;

    User getUserByEmail(String userEmail);

    ResponseEntity<?> enableUserWithToken(String token) throws InvalidActivationToken, VerificationTokenHasBeenExpired;

    ResponseEntity<?> reGenerateVerificationToken(String email);
}
