package com.gotmovers.usermicroservice.config;

import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    @Bean("SimpleEmailQueue")
    public Queue emailQueue(){
        String Queue_Name = "SimpleEmailQueue";
        return new Queue(Queue_Name, false, false, false);
    }
}
