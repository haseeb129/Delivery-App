package com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends CrudRepository<Category,Long> {

}
