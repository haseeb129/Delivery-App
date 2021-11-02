package com.gotmovers.usermicroservice.repository;

import com.gotmovers.usermicroservice.model.UserRole;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRoleRepository extends CrudRepository<UserRole, Long> {
    @Query("FROM UserRole where name=?1")
    UserRole findbyName(String name);
}
