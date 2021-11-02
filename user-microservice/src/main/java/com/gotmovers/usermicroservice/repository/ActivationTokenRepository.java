package com.gotmovers.usermicroservice.repository;

import com.gotmovers.usermicroservice.model.User;
import com.gotmovers.usermicroservice.model.ActivationToken;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivationTokenRepository extends CrudRepository<ActivationToken, Long> {
    @Query("FROM ActivationToken where token=?1")
    public ActivationToken findByToken(String token);

    @Query("FROM ActivationToken where user=?1")
    public ActivationToken findByUser(User user);
}
