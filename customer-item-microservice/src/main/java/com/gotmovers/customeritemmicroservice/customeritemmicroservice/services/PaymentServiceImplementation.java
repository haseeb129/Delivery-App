package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.dto.ChargeRequest;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Customers;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Payment;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.CustomerRepository;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.PaymentRepository;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.model.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PaymentServiceImplementation implements PaymentService {
    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    PaymentRepository paymentRepository;

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


    @Override
    public String getToken() throws StripeException {
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
        return token.getId();
    }

    @Override
    public List<Payment> getAll() {
        return (List<Payment>)paymentRepository.findAll();
    }

    @Override
    public Payment getByCustomer(Long id) {
//        Customers customers = customerRepository.findById(id).get();
        return paymentRepository.getByCustomer(id);
    }

    @Override
    public Payment charge(ChargeRequest chargeRequest, Long id) throws StripeException {

        Map<String, Object> chargeParams = new HashMap<>();
        chargeParams.put("amount", chargeRequest.getAmount());
        chargeParams.put("currency", chargeRequest.getCurrency());
        chargeParams.put("description", chargeRequest.getDescription());
        chargeParams.put("source", chargeRequest.getStripeToken());
        Charge chargeObj = Charge.create(chargeParams);
        System.out.println("charge");
        System.out.println(chargeObj);

        Customers customer = customerRepository.findById(id).get();
        Payment payment = new Payment();
        payment.setAmountPaid(chargeObj.getAmount()/100);

        payment.setCurrency(chargeObj.getCurrency());
        payment.setCustomer(customer);
        payment.setLast4(chargeObj.getPaymentMethodDetails().getCard().getLast4());
        payment.setSellerMessage(chargeObj.getOutcome().getSellerMessage());
        payment.setStatus(chargeObj.getStatus());
        payment.setTokenId(chargeObj.getId());
        payment.setTotal(chargeRequest.getTotal());
        payment.setAmountRemaining(chargeRequest.getTotal()-(((Number)(chargeObj.getAmount()/100))).doubleValue());

        paymentRepository.save(payment);
        return payment;
    }
}
