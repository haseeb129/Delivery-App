package com.gotmovers.apigateway.object;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


public class User {

    private Long id;

    private String email;

    private String password;

    private boolean enabled;

    private List<UserRole> roles;

    public User() {
    }

    public User(Long id, String email, String password, boolean enabled) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.enabled = enabled;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public List<UserRole> getRoles() {
        return roles;
    }

    public void setRoles(List<UserRole> roles) {
        this.roles = roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void addRole(UserRole userRole) {
        if (roles == null) {
            roles = new ArrayList<>();
        }
        roles.add(userRole);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", enabled=" + enabled +
                ", roles={" + roles.stream().map(UserRole::getName).collect(Collectors.joining(",")) + "}" +
                '}';
    }
}
