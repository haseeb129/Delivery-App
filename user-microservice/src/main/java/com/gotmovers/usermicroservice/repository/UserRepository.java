package com.gotmovers.usermicroservice.repository;

import com.gotmovers.usermicroservice.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    @Query("from User where email=?1")
    User findByEmail(String email);
}
