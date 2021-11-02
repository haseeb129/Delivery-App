package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.google.maps.model.DistanceMatrix;
import com.google.maps.model.LatLng;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.bean.OrderReq;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Customers;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Item;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Order;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.CustomerRepository;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.ItemRepository;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Map;

@Service
public class OrderServiceImplementation implements OrderService{
    @Autowired
    GoogleMapsService googleMapsService;
    @Autowired
    ItemService itemService;
    @Autowired
    ItemRepository itemRepository;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    OrderDetailsService orderDetailsService;

    @Override
    public Map<String, Double> getPrice(OrderReq orderReq,Long customerId) {
        Double ratePerMile = 3d;
        Double totalItemsCost = 0d;
        Double total;
        Order order = new Order();


        DecimalFormat df = new DecimalFormat("0.00");
        LatLng origin = new LatLng(orderReq.getOrigin().getLat(),orderReq.getOrigin().getLon());
        LatLng destination = new LatLng(orderReq.getDestination().getLat(),orderReq.getDestination().getLon());

        totalItemsCost = orderReq.getItems().stream()
                .map(item -> {
                    Item savedItem = itemRepository.findById(item.getId()).orElse(null);
                    return savedItem == null ? 0.0 : (savedItem.getCost() * item.getQuantity());
                }).mapToDouble(Double::doubleValue).sum();

        DistanceMatrix distanceMatrix = googleMapsService.fetchDistanceFromGoogle(origin,destination);
        Double distanceInMeters = ((Number)distanceMatrix.rows[0].elements[0].distance.inMeters).doubleValue();
        double distanceInMiles = distanceInMeters / 1609d;
        double totalDistanceCost = Double.valueOf(df.format(ratePerMile * distanceInMiles));
        total = totalDistanceCost+totalItemsCost;
        Customers customer =  customerRepository.findById(customerId).get();
        System.out.println("orderDetailsService1");

           order.setDistance(distanceInMiles);
           order.setDistancePrice(totalDistanceCost);
           order.setTotalPrice(total);
           order.setCustomer(customer);
           orderRepository.save(order);
           System.out.println();
           orderDetailsService.addNew(orderReq.getItems(),order );
        System.out.println("orderDetailsService2");

        Map<String, Double> response = new HashMap<>();
        response.put("totalPrice",total );
        return response;
    }


    @Override
    public Order getOrder(long customerId) {
         Order order = orderRepository.findByCustomerId(customerId);
         return order;
    }
}
