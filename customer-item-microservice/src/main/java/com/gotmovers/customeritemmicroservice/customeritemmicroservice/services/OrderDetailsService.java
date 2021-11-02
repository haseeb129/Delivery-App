package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.bean.OrderReqItem;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Order;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.OrderDetails;

import java.util.List;

public interface OrderDetailsService {
    public List<OrderDetails> getByOrder(Long id);
    public List<OrderDetails> addNew(List<OrderReqItem> orderDetailsList, Order order);
    public List<OrderDetails> getAll();
}
