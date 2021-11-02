package com.gotmovers.customeritemmicroservice.customeritemmicroservice.config;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Customers;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class DataLoader {
    @Autowired
    private CustomerRepository customerRepository;
    @PostConstruct
    public void init(){
        Customers model1 = new Customers();
        model1.setName("model1");
        customerRepository.save(model1);
    }
}
