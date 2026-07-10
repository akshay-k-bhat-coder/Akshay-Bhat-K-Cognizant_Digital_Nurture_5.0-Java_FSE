package com.cognizant.demo.hibernate;

import com.cognizant.demo.model.Country;
import jakarta.persistence.EntityManagerFactory;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class HibernateDemo {

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    public void run() {

        SessionFactory sessionFactory =
                entityManagerFactory.unwrap(SessionFactory.class);

        Session session = sessionFactory.openSession();

        List<Country> countries =
                session.createQuery("FROM Country", Country.class).list();

        System.out.println("\n===== Hibernate Demo =====");

        countries.forEach(System.out::println);

        session.close();
    }
}