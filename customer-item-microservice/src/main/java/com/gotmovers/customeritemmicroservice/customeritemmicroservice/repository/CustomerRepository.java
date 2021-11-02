package com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Customers;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customers,Long> {

}
