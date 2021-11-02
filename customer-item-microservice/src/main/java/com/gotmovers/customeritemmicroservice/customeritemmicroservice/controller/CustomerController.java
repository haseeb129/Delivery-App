package com.gotmovers.customeritemmicroservice.customeritemmicroservice.controller;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Customers;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customers")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @GetMapping("/greetings")
    public String greetings(){
        return "Hello from customer";
    }
    @GetMapping("/getAll")
    public List<Customers> list(){
        return customerService.listModels();
    }

    @GetMapping("/getById/{id}")
    public Optional<Customers> getById(@PathVariable("id") Long id){
        return customerService.getById(id);
    }
    @PostMapping("/addNew")
    public Customers insert(@RequestBody Customers customer ){
        return customerService.addNew(customer);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") Long id){
        return customerService.delete(id);
    }
}
