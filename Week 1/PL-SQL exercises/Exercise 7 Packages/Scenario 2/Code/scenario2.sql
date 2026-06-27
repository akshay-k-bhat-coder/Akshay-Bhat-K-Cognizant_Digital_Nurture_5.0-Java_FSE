SET SERVEROUTPUT ON;

CREATE OR REPLACE PACKAGE EmployeeManagement AS
    PROCEDURE HireEmployee(
        p_employeeid IN NUMBER,
        p_name IN VARCHAR2,
        p_position IN VARCHAR2,
        p_salary IN NUMBER,
        p_department IN VARCHAR2,
        p_hiredate IN DATE
    );

    PROCEDURE UpdateEmployee(
        p_employeeid IN NUMBER,
        p_name IN VARCHAR2,
        p_position IN VARCHAR2,
        p_salary IN NUMBER,
        p_department IN VARCHAR2
    );

    FUNCTION CalculateAnnualSalary(
        p_employeeid IN NUMBER
    ) RETURN NUMBER;
END EmployeeManagement;
/

CREATE OR REPLACE PACKAGE BODY EmployeeManagement AS

    PROCEDURE HireEmployee(
        p_employeeid IN NUMBER,
        p_name IN VARCHAR2,
        p_position IN VARCHAR2,
        p_salary IN NUMBER,
        p_department IN VARCHAR2,
        p_hiredate IN DATE
    ) AS
    BEGIN
        INSERT INTO Employees(EmployeeID, Name, Position, Salary, Department, HireDate)
        VALUES (p_employeeid, p_name, p_position, p_salary, p_department, p_hiredate);

        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Employee hired successfully.');
    END HireEmployee;


    PROCEDURE UpdateEmployee(
        p_employeeid IN NUMBER,
        p_name IN VARCHAR2,
        p_position IN VARCHAR2,
        p_salary IN NUMBER,
        p_department IN VARCHAR2
    ) AS
    BEGIN
        UPDATE Employees
        SET Name = p_name,
            Position = p_position,
            Salary = p_salary,
            Department = p_department
        WHERE EmployeeID = p_employeeid;

        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Employee updated successfully.');
    END UpdateEmployee;


    FUNCTION CalculateAnnualSalary(
        p_employeeid IN NUMBER
    ) RETURN NUMBER AS
        v_salary NUMBER;
    BEGIN
        SELECT Salary INTO v_salary
        FROM Employees
        WHERE EmployeeID = p_employeeid;

        RETURN v_salary * 12;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            DBMS_OUTPUT.PUT_LINE('Employee not found.');
            RETURN NULL;
    END CalculateAnnualSalary;

END EmployeeManagement;
/

BEGIN
    EmployeeManagement.HireEmployee(
        3,
        'David',
        'Analyst',
        50000,
        'Finance',
        TO_DATE('2020-01-10','YYYY-MM-DD')
    );
END;
/

BEGIN
    EmployeeManagement.UpdateEmployee(
        3,
        'David Kumar',
        'Senior Analyst',
        60000,
        'Finance'
    );
END;
/

SELECT EmployeeID, Name, Position, Salary, Department
FROM Employees
WHERE EmployeeID = 3;

BEGIN
    DBMS_OUTPUT.PUT_LINE(
        'Annual Salary = ' || EmployeeManagement.CalculateAnnualSalary(3)
    );
END;
/