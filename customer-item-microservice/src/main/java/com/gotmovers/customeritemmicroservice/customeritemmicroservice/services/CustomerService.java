package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Customers;

import java.util.List;
import java.util.Optional;


public interface CustomerService {
    public List<Customers> listModels();
    public Customers addNew(Customers customer);
    public String delete(Long id);
    public Optional<Customers> getById(Long id);
}
