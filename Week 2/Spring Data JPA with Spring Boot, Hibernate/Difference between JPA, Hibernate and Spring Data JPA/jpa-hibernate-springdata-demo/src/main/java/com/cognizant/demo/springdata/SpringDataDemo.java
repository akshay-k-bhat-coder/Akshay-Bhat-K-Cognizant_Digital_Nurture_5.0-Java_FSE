package com.cognizant.demo.springdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SpringDataDemo {

    @Autowired
    private CountryService service;

    public void run(){

        System.out.println("\n===== Spring Data JPA Demo =====");

        service.getAllCountries()
                .forEach(System.out::println);

    }

}