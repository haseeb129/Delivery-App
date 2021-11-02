package com.gotmovers.customeritemmicroservice.customeritemmicroservice.bean;

import lombok.Data;

import java.util.List;

@Data
public class OrderReq {


    OrderReqLatLon destination, origin;

    List<OrderReqItem> items;

}
