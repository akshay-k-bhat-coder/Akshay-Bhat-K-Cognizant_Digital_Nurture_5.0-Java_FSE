package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {

    public static void main(String[] args) {

        System.out.println("Loading Spring Application Context...");

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        System.out.println("Spring Context Loaded Successfully!");

        BookService service = context.getBean("bookService", BookService.class);

        service.displayService();

        System.out.println("\nExercise 4 completed successfully.");
        System.out.println("Maven project configured with:");
        System.out.println("- Spring Context");
        System.out.println("- Spring AOP");
        System.out.println("- Spring WebMVC");
    }
}