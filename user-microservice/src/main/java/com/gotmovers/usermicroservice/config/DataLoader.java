package com.gotmovers.usermicroservice.config;

import com.gotmovers.usermicroservice.misc.Roles;
import com.gotmovers.usermicroservice.model.User;
import com.gotmovers.usermicroservice.model.UserRole;
import com.gotmovers.usermicroservice.repository.UserRepository;
import com.gotmovers.usermicroservice.repository.UserRoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class DataLoader {
    private static final Logger log = LoggerFactory.getLogger(DataLoader.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserRoleRepository userRoleRepository;

    @Autowired
    @Qualifier("encoder")
    private PasswordEncoder bCryptPasswordEncoder;

    @PostConstruct
    public void init() {
        UserRole DBA = new UserRole(Roles.DBA);
        UserRole ADMIN = new UserRole(Roles.ADMIN);
        UserRole CUSTOMER = new UserRole(Roles.CUSTOMER);
        UserRole MOVER = new UserRole(Roles.MOVER);
        log.info("Saved {}", userRoleRepository.save(DBA));
        log.info("Saved {}", userRoleRepository.save(ADMIN));
        log.info("Saved {}", userRoleRepository.save(CUSTOMER));
        log.info("Saved {}", userRoleRepository.save(MOVER));


        User batman = new User(1L, "batman@email.com",bCryptPasswordEncoder.encode("password"),true);
        batman.addRole(ADMIN);

        User superman = new User(2L, "superman@email.com",bCryptPasswordEncoder.encode("password"), true);
        superman.addRole(CUSTOMER);

        log.info("Saved {}", userRepository.save(batman));
        log.info("Saved {}", userRepository.save(superman));
    }


}
