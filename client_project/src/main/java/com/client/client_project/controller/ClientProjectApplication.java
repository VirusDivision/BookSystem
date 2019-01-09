package com.client.client_project.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@EnableEurekaClient
@SpringBootApplication
@RestController
public class ClientProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClientProjectApplication.class, args);
    }

    @RequestMapping("/c")
    public String hello(){
        return "hello";
    }
}

