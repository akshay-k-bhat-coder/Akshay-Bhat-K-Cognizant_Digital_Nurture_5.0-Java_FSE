package com.cognizant.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExercise {

    private static final Logger logger =
            LoggerFactory.getLogger(LoggingExercise.class);

    public static void main(String[] args) {

        logger.error("This is an error message");

        logger.warn("This is a warning message");
    }
}