package com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Category;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Type;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TypeRepository extends CrudRepository<Type,Long> {
    @Query("from Type where category=?1")
    List<Type> findByCategory(Category category);
}
