package com.gotmovers.customeritemmicroservice.customeritemmicroservice.controller;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.bean.OrderReq;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Order;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/order")
public class OrderController {


    @Autowired
    OrderService orderService;
    @PostMapping("/addNew/{customerId}")


    public Map<String, Double> addNew(@RequestBody OrderReq orderReq, @PathVariable("customerId") Long customerId){


        return orderService.getPrice(orderReq,customerId);
    }

    @GetMapping("getOrder/{customerId}")
    public Order getOrder(@PathVariable ("customerId")Long customerId){
        return orderService.getOrder(customerId);
    }

}
