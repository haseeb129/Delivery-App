package com.gotmovers.customeritemmicroservice.customeritemmicroservice.controller;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.dto.ChargeRequest;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Payment;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.services.PaymentService;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("billing")
public class BillingController {

    @Autowired
    private PaymentService paymentService;

    @GetMapping("/heartbeat")
    private String heartBeat(){
        return "Bip Bip Bop Bop!";
    }

    @GetMapping("getAll")
    private List<Payment> getAll(){
        return paymentService.getAll();
    }

    @PostMapping("/charge/{id}")
    private Payment chargePayment(@RequestBody ChargeRequest chargeRequest,@PathVariable("id") Long id) throws StripeException {
        return paymentService.charge(chargeRequest,id);
    }

    @PostMapping("/getToken")
    private String getToken() throws StripeException {
        return paymentService.getToken();
    }

    @GetMapping("getByCustomer/{id}")
    private Payment getByCustomer(@PathVariable("id") Long id){
        return paymentService.getByCustomer(id);
    }
}
