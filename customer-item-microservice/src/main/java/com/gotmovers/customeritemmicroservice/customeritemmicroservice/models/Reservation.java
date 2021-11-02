package com.gotmovers.customeritemmicroservice.customeritemmicroservice.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "reservation")
@Data
public class Reservation {
    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private Float fromLatitude;
    @Column
    private Float fromLongitude;
    @Column
    private Float toLatitude;
    @Column
    private Float toLongitude;
    @Column
    private Float totalAmount;
    @Column
    private Float amountPaid;
    @OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL,optional = false)
    @JoinColumn(name = "customer",nullable = false)
    @JsonIgnore
    private Customers customer;
    @OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL,optional = false)
    @JoinColumn(name = "area",nullable = false)
    @JsonIgnore
    private Area area;
}
