package com.gotmovers.apigateway.feignclient;

import com.gotmovers.apigateway.object.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Component
@FeignClient(name = "user")
public interface UserClient {

    @GetMapping(value = "/getbyemail/{user-email}")
    User getUserDetailForAuth(@PathVariable("user-email") String userEmail);

}
