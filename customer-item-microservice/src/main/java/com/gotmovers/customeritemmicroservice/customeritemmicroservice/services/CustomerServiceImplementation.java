package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Customers;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CustomerServiceImplementation implements CustomerService {
@Autowired
private CustomerRepository customerRepository;
    @Override
    public List<Customers> listModels() {
        return (List<Customers>) customerRepository.findAll();
    }

    @Override
    public Customers addNew(Customers customer) {
        customerRepository.save(customer);
        return customer;
    }

    @Override
    public String delete(Long id) {
        customerRepository.deleteById(id);
        return "customer deleted successfully";
    }

    @Override
    public Optional<Customers> getById(Long id) {
        return customerRepository.findById(id);
    }
}
