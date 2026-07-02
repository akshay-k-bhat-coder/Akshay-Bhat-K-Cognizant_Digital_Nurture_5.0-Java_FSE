package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {

    public static void main(String[] args) {

        System.out.println("===== Exercise 7: Constructor and Setter Injection =====\n");

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService service =
                context.getBean("bookService", BookService.class);

        System.out.println();

        service.displayService();

        System.out.println("\nExercise 7 completed successfully.");
        System.out.println("Constructor Injection and Setter Injection are configured.");
    }
}