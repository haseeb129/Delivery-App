package com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Order;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

//import org.hibernate.mapping.Map;

@Repository
public interface OrderRepository extends CrudRepository<Order,Long> {

    @Query("from Order where customer.id = ?1")
    public Order findByCustomerId(Long customerId);
}
