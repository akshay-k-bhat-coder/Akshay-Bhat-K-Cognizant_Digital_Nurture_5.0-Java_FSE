# Exercise 01 – Setting Up JUnit

## Objective

The objective of this exercise is to set up a Java Maven project with the JUnit testing framework in IntelliJ IDEA. This provides the foundation for writing and executing unit tests in subsequent exercises.

---

## Tools & Technologies

* Java 17
* IntelliJ IDEA
* Apache Maven
* JUnit 4.13.2

---

## Project Structure

```text
Exercise-01-SettingUpJUnit
│
├── pom.xml
├── .mvn/
├── src/
│   ├── main/
│   └── test/
└── README.md
```

---

## Steps Performed

1. Created a new Maven project in IntelliJ IDEA.
2. Configured the project to use Java 17.
3. Added the JUnit 4.13.2 dependency in `pom.xml`.
4. Reloaded the Maven project to download the required dependencies.
5. Verified that the JUnit library was successfully added to the project.

---

## Maven Dependency

```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
```

---

## Expected Outcome

* Maven project created successfully.
* JUnit dependency resolved successfully.
* Project is ready for writing and executing JUnit test cases.

---

## Notes

This exercise focuses only on configuring the development environment. No Java source files or test cases are required as part of this setup exercise. The project serves as the foundation for the remaining JUnit hands-on exercises.

---

## Status

✅ Completed Successfully
