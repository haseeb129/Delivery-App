package com.gotmovers.usermicroservice.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.gotmovers.usermicroservice.bean.CustomMessageResponse;
import com.gotmovers.usermicroservice.bean.JwtResponse;
import com.gotmovers.usermicroservice.config.JwtUtil;
import com.gotmovers.usermicroservice.exception.*;
import com.gotmovers.usermicroservice.messagequeue.EmailSender;
import com.gotmovers.usermicroservice.misc.Roles;
import com.gotmovers.usermicroservice.model.ActivationToken;
import com.gotmovers.usermicroservice.model.Email;
import com.gotmovers.usermicroservice.model.User;
import com.gotmovers.usermicroservice.model.UserRole;
import com.gotmovers.usermicroservice.repository.ActivationTokenRepository;
import com.gotmovers.usermicroservice.repository.UserRepository;
import com.gotmovers.usermicroservice.repository.UserRoleRepository;
import com.gotmovers.usermicroservice.utils.EmailTemplate;
import com.gotmovers.usermicroservice.utils.HelperUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class UserServiceImpl implements UserService {

    private static final Logger log = LoggerFactory.getLogger(UserServiceImpl.class);

    @Value("${domain.name}")
    private String domainName;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserRoleRepository userRoleRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    @Qualifier("encoder")
    private PasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private ActivationTokenRepository activationTokenRepository;

    @Autowired
    private EmailSender emailSender;

    @Override
    public Iterable<User> listAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public ResponseEntity<CustomMessageResponse> Signup(User user) throws AlreadyExistException, InvalidRoleException {
        User savedUser = userRepository.findByEmail(user.getEmail());
        Roles requestRole = user.getRole() == null ? null : Roles.findByCodeAbbr(user.getRole().toLowerCase());
        UserRole savedRole = null;
        if (requestRole != null) savedRole = userRoleRepository.findbyName(requestRole.getDbAbbr());
        if (requestRole == null || savedRole == null) throw new InvalidRoleException("Requested Role Doesn't Exist.");
        ActivationToken activationToken = new ActivationToken();
        if (savedUser == null) {
            String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());
            user.setPassword(encodedPassword);
            user.setEnabled(false);
            user.addRole(savedRole);
            savedUser = userRepository.save(user);
            activationToken = generateAndSaveVerificationToken(savedUser);
            savedUser.setActivationToken(activationToken);
            sendActivationEmail(savedUser);
        } else throw new AlreadyExistException("User email already Exist!");


        CustomMessageResponse successfulSignupResponse = new CustomMessageResponse(
                HttpStatus.OK, Arrays.asList("Successfully Signed Up"), "SUCCESFULLYSIGNEDUP"
        );
        return new ResponseEntity<>(successfulSignupResponse, successfulSignupResponse.getHttpStatus());
    }

    @Override
    public JwtResponse login(User user) throws LoginFailedException, UserNotEnabledException {
        JwtResponse jwtResponse = new JwtResponse();
        User savedUser = userRepository.findByEmail(user.getEmail());
        if (savedUser == null || !bCryptPasswordEncoder.matches(user.getPassword(), savedUser.getPassword()))
            throw new LoginFailedException("Invalid Email or Password!");
        if (!savedUser.isEnabled()) throw new UserNotEnabledException("User not activated!");
        String generateToken = jwtUtil.generateToken(savedUser);
        jwtResponse.setJwt(generateToken);
        jwtResponse.setUser_email(savedUser.getEmail());
        return jwtResponse;
    }

    @Override
    public User getUserByEmail(String userEmail) {
        User savedUser = userRepository.findByEmail(userEmail);
        return savedUser;
    }

    @Override
    public ResponseEntity<?> enableUserWithToken(String token) throws InvalidActivationToken, VerificationTokenHasBeenExpired {
        ActivationToken savedToken = activationTokenRepository.findByToken(token);
        if (savedToken == null) throw new InvalidActivationToken("User Activation Token is Invalid.");
        if (HelperUtils.isVerificationTokenExpired(savedToken.getExpiryDate()))
            throw new VerificationTokenHasBeenExpired("User Verification is Expired. Please Generate New Token. ");
        User savedUser = savedToken.getUser();
        savedUser.setEnabled(true);
        userRepository.save(savedUser);
        activationTokenRepository.delete(savedToken);
        CustomMessageResponse successfulSignupResponse = new CustomMessageResponse(
                HttpStatus.CREATED, Arrays.asList("User has been Activated.")
        );
        return new ResponseEntity<>(successfulSignupResponse, successfulSignupResponse.getHttpStatus());
    }

    @Override
    public ResponseEntity<?> reGenerateVerificationToken(String email) {
        User savedUser = userRepository.findByEmail(email);
        CustomMessageResponse reGenerateVerificationTokenResponse = new CustomMessageResponse(
                HttpStatus.CREATED,
                Arrays.asList("New Verification token has been generated and emailed to User's Email ID."),
                "TOKENREGENERATED"
        );
        if (savedUser != null && savedUser.isEnabled()) {
            reGenerateVerificationTokenResponse = new CustomMessageResponse(
                    HttpStatus.BAD_REQUEST,
                    Arrays.asList("User is Already Activated."),
                    "USERALREADYACTIVATED"
            );
        } else
            generateAndSaveVerificationToken(savedUser);
        return new ResponseEntity<>(reGenerateVerificationTokenResponse, reGenerateVerificationTokenResponse.getHttpStatus());
    }

    private ActivationToken generateAndSaveVerificationToken(User user) {
        ActivationToken activationToken = new ActivationToken();
        activationToken.setToken(HelperUtils.generateRandomString());
        activationToken.setUser(user);
        activationTokenRepository.save(activationToken);
        return activationToken;
    }

    private void sendActivationEmail(User user) {
        try {
        String emailBody = EmailTemplate.generateActivationEmailMessage(domainName, "Hello", user.getActivationToken().getToken());
        Email email = new Email();
        email.setTo(user.getEmail());
        email.setSubject(EmailTemplate.activationEmailSubject);
        email.setBody(emailBody);
        emailSender.pushEmailToQueue(email);
        } catch (JsonProcessingException e) {
            log.error(e.getMessage());
        }

    }
}
