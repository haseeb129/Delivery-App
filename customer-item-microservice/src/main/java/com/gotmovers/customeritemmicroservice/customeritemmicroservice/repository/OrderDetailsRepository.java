package com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.OrderDetails;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailsRepository extends CrudRepository<OrderDetails,Long> {
    @Query("from OrderDetails where order.id = ?1")
    List<OrderDetails> getByOrder(Long id);

}
