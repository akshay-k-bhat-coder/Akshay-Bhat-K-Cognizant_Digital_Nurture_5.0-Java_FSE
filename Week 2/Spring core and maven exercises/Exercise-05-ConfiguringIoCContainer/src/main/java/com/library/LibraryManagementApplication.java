package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {

    public static void main(String[] args) {

        System.out.println("===== Exercise 5: Configuring the Spring IoC Container =====\n");

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        System.out.println("Spring IoC Container initialized successfully.\n");

        BookService service =
                context.getBean("bookService", BookService.class);

        service.displayService();

        System.out.println("\nExercise 5 completed successfully.");
        System.out.println("Beans are created and managed by the Spring IoC Container.");
    }
}