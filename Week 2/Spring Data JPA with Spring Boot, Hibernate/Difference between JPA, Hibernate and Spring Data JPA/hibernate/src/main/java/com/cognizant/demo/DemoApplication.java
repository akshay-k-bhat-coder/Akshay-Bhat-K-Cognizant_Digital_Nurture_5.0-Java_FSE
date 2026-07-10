package com.cognizant.demo;

import com.cognizant.demo.hibernate.HibernateDemo;
import com.cognizant.demo.jpa.JPADemo;
import com.cognizant.demo.springdata.SpringDataDemo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

    @Autowired
    private JPADemo jpaDemo;

    @Autowired
    private HibernateDemo hibernateDemo;

    @Autowired
    private SpringDataDemo springDataDemo;

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) {

        System.out.println("\n==============================");
        System.out.println("JPA");
        System.out.println("==============================");

        jpaDemo.run();

        System.out.println("\n==============================");
        System.out.println("HIBERNATE");
        System.out.println("==============================");

        hibernateDemo.run();

        System.out.println("\n==============================");
        System.out.println("SPRING DATA JPA");
        System.out.println("==============================");

        springDataDemo.run();

    }
}