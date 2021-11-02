package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.bean.OrderReq;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Order;

import java.util.Map;

public interface OrderService {
    public Map<String, Double> getPrice(OrderReq orderReq,Long CustomerId);
    public Order getOrder(long customerId);
}
