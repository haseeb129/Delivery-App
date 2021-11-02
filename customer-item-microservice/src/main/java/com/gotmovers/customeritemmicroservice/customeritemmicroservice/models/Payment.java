package com.gotmovers.customeritemmicroservice.customeritemmicroservice.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "payment")
@Data
public class Payment {
    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String tokenId;

    @Column
    private String currency;

    @Column
    private Double total;

    @Column
    private Long amountPaid;

    @Column
    private Double amountRemaining;

    @Column
    private String last4;

    @Column
    private String sellerMessage;

    @Column
    private String status;

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.ALL)
    @JoinColumn(name = "customerDetails", nullable = false)
    @JsonIgnore
    private Customers customer;

}
