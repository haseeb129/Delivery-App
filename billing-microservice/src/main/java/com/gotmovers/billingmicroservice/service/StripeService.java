package com.gotmovers.billingmicroservice.service;

import com.gotmovers.billingmicroservice.dto.ChargeRequest;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.model.Token;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@Service
public class StripeService {

    @Value("${STRIPE_SECRET_KEY}")
    String secretKey;

    @PostConstruct
    public void init() {
        Stripe.apiKey = secretKey;
        System.out.println("secret key");
        System.out.println(secretKey);
        System.out.println("stripe api key");
        System.out.println(Stripe.apiKey);

    }

    public Charge charge(ChargeRequest chargeRequest) throws StripeException {
        Map<String, Object> card = new HashMap<>();
        card.put("number", "4242424242424242");
        card.put("exp_month", 7);
        card.put("exp_year", 2021);
        card.put("cvc", "314");
        Map<String, Object> params = new HashMap<>();
        params.put("card", card);
        Token token = Token.create(params);
        System.out.println("token");
        System.out.println(token);

        Map<String, Object> chargeParams = new HashMap<>();
        chargeParams.put("amount", chargeRequest.getAmount());
        chargeParams.put("currency", chargeRequest.getCurrency());
        chargeParams.put("description", chargeRequest.getDescription());
        chargeParams.put("source", token.getId());
        Charge chargeObj = Charge.create(chargeParams);
        System.out.println("charge");
        System.out.println(chargeObj);




        return chargeObj;
    }



}
