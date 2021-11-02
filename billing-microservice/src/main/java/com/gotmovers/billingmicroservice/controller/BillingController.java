package com.gotmovers.billingmicroservice.controller;

import com.gotmovers.billingmicroservice.dto.ChargeRequest;
import com.gotmovers.billingmicroservice.service.StripeService;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.model.Token;
import com.stripe.net.StripeResponse;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class BillingController {

    @Autowired
    private StripeService stripeService;

    @GetMapping("/heartbeat")
    private String heartBeat(){
        return "Bip Bip Bop Bop!";
    }

    @PostMapping("/charge")
    private Charge chargePayment(@RequestBody ChargeRequest chargeRequest) throws StripeException {
        return stripeService.charge(chargeRequest);
    }
    @SneakyThrows
    @PostMapping("/getToken")
    private Token getToken(){
        return stripeService.getToken();
    }

}
