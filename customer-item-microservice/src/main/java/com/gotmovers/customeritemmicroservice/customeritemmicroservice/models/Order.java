package com.gotmovers.customeritemmicroservice.customeritemmicroservice.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Orders")
@Data
public class Order {
    @Id
    @Column(name = "order_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private Double distance;

    @Column
    private Double distancePrice;

    @Column
    private Double totalPrice;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Customers customer ;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "order")
    private List<OrderDetails> orderDetails;
}
