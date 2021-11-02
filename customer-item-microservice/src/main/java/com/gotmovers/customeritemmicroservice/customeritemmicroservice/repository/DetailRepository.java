package com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Details;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Item;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DetailRepository extends CrudRepository<Details,Long> {
    @Query("from Details where item =?1")
    public List<Details> getByItem(Item item);
}
