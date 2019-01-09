package com.server.server_project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class ServerProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServerProjectApplication.class, args);
    }

}

