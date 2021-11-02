package com.gotmovers.usermicroservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gotmovers.usermicroservice.misc.Roles;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="roles")
public class UserRole {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "role_id")
    private Long id;

    @Column(name = "role_name", unique = true)
    private String name;

    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "roles", cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    private List<User> users;

    public UserRole() {
    }

    public UserRole(Roles role) {
        this.name=role.getDbAbbr();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "UserRole{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", users=" + users +
                '}';
    }
}
