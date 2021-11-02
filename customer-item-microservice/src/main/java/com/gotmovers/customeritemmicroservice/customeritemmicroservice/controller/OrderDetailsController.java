package com.gotmovers.customeritemmicroservice.customeritemmicroservice.controller;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.OrderDetails;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.services.OrderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping
public class OrderDetailsController {
    @Autowired
    OrderDetailsService orderDetailsService ;
    @GetMapping("getOrdersDetails")
    public List<OrderDetails> getAllOrderDetails(){
        return orderDetailsService.getAll();
    }
}
