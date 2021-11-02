package com.gotmovers.usermicroservice.exception;

import com.gotmovers.usermicroservice.bean.ErrorResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.List;


@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler({VerificationTokenHasBeenExpired.class})
    public ResponseEntity<ErrorResponse> handleVerificationTokenHasBeenExpired(Exception ex){
        List<String> details = new ArrayList<>();
        details.add(ex.getMessage());
        String causeMessage = "EXPIREDVERIFICATIONTOKEN";
        HttpStatus status = HttpStatus.NOT_ACCEPTABLE;
        ErrorResponse errorResponse = new ErrorResponse(status, details, causeMessage);
        return new ResponseEntity<>(errorResponse, status);
    }

    @ExceptionHandler({InvalidActivationToken.class})
    public ResponseEntity<ErrorResponse> handleInvalidActivationToken(Exception ex){
        List<String> details = new ArrayList<>();
        details.add(ex.getMessage());
        String causeMessage = "INVALIDACTIVATIONTOKEN";
        HttpStatus status = HttpStatus.FORBIDDEN;
        ErrorResponse errorResponse = new ErrorResponse(status, details, causeMessage);
        return new ResponseEntity<>(errorResponse, status);
    }

    @ExceptionHandler({UserNotEnabledException.class})
    public ResponseEntity<ErrorResponse> handleUserNotActivatedException(Exception ex){
        List<String> details = new ArrayList<>();
        details.add(ex.getMessage());
        String causeMessage = "USERNOTACTIVATED";
        HttpStatus status = HttpStatus.FORBIDDEN;
        ErrorResponse errorResponse = new ErrorResponse(status, details, causeMessage);
        return new ResponseEntity<>(errorResponse, status);
    }

    @ExceptionHandler({InvalidRoleException.class})
    public ResponseEntity<ErrorResponse> handleInvalidFieldException(Exception ex){
        List<String> details = new ArrayList<>();
        details.add(ex.getMessage());
        String causeMessage = "INVALIDFIELD";
        HttpStatus status = HttpStatus.BAD_REQUEST;
        ErrorResponse errorResponse = new ErrorResponse(status, details, causeMessage);
        return new ResponseEntity<>(errorResponse, status);
    }

    @ExceptionHandler({AlreadyExistException.class})
    public ResponseEntity<ErrorResponse> handleAlreadyExistException(Exception ex){
        List<String> details = new ArrayList<>();
        details.add(ex.getMessage());
        String causeMessage = "USERALREADYEXIST";
        HttpStatus status = HttpStatus.FORBIDDEN;
        ErrorResponse errorResponse = new ErrorResponse(status, details, causeMessage);
        return new ResponseEntity<>(errorResponse, status);
    }

    @ExceptionHandler({LoginFailedException.class})
    public ResponseEntity<ErrorResponse> handleLoginFailedException(Exception ex){
        List<String> details = new ArrayList<>();
        details.add(ex.getMessage());
        String causeMessage = "INVALIDCREDENTIALS";
        HttpStatus status = HttpStatus.UNAUTHORIZED;
        ErrorResponse errorResponse = new ErrorResponse(status, details, causeMessage);
        return new ResponseEntity<>(errorResponse, status);
    }

    @Override
        protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers, HttpStatus status,
                                                                  WebRequest request) {

        List<String> details = new ArrayList<>();
        for(ObjectError error : ex.getBindingResult().getAllErrors()) {
            details.add(error.getDefaultMessage());
        }
        String causeMessage = (ex.getCause() == null) ? "" : ex.getMessage();
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.BAD_REQUEST, details, causeMessage);
        System.out.println("!!!!!! Invalid field !!!!!!");

        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }


}