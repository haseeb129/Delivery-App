package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.dto.ChargeRequest;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Payment;
import com.stripe.exception.StripeException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PaymentService {
    Payment charge(ChargeRequest chargeRequest, Long id) throws StripeException;

    String getToken() throws StripeException;

    List<Payment> getAll();

    Payment getByCustomer(Long id);

//    @Value("${STRIPE_SECRET_KEY}")
//    String secretKey;
//
//    @PostConstruct
//    public void init() {
//        Stripe.apiKey = secretKey;
//        System.out.println("secret key");
//        System.out.println(secretKey);
//        System.out.println("stripe api key");
//        System.out.println(Stripe.apiKey);
//
//    }
//
//    public Charge charge(ChargeRequest chargeRequest) throws StripeException {
//        Map<String, Object> card = new HashMap<>();
//        card.put("number", "4242424242424242");
//        card.put("exp_month", 7);
//        card.put("exp_year", 2021);
//        card.put("cvc", "314");
//        Map<String, Object> params = new HashMap<>();
//        params.put("card", card);
//        Token token = Token.create(params);
//        System.out.println("token");
//        System.out.println(token);
//
//        Map<String, Object> chargeParams = new HashMap<>();
//        chargeParams.put("amount", chargeRequest.getAmount());
//        chargeParams.put("currency", chargeRequest.getCurrency());
//        chargeParams.put("description", chargeRequest.getDescription());
//        chargeParams.put("source", token.getId());
//        Charge chargeObj = Charge.create(chargeParams);
//        System.out.println("charge");
//        System.out.println(chargeObj);
//
//
//
//
//        return chargeObj;
//    }
//


}
