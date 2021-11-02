package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.bean.OrderReqItem;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Item;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Order;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.OrderDetails;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.ItemRepository;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.OrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderDetailsServiceImplementation implements OrderDetailsService {
    @Autowired
    OrderDetailsRepository orderDetailsRepository;

    @Autowired
    ItemRepository itemRepository;

    @Override
    public List<OrderDetails> getByOrder(Long id) {
        return orderDetailsRepository.getByOrder(id);
    }

    @Override
    public List<OrderDetails> addNew(List<OrderReqItem> orderDetailsList, Order order) {
        List<OrderDetails> orderDetailsListToReturn = new ArrayList<OrderDetails>();
        orderDetailsList.forEach(orderReqItem ->
        {
            Item item = itemRepository.findById(orderReqItem.getId()).get();
            double price = item.getCost() * orderReqItem.getQuantity();
            OrderDetails orderDetails = new OrderDetails();
            orderDetails.setTotalPriceOfItem(price);
            orderDetails.setOrder(order);
            orderDetails.setQuantity(orderReqItem.getQuantity());
            orderDetailsRepository.save(orderDetails);
            orderDetailsListToReturn.add(orderDetails);
        }

);
        return orderDetailsListToReturn;
    }

    @Override
    public List<OrderDetails> getAll() {
        return (List<OrderDetails>)orderDetailsRepository.findAll();
    }
}
