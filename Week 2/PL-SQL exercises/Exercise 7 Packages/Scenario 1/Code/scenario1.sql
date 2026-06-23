SET SERVEROUTPUT ON;

CREATE OR REPLACE PACKAGE CustomerManagement AS
    PROCEDURE AddCustomer(
        p_customerid IN NUMBER,
        p_name IN VARCHAR2,
        p_dob IN DATE,
        p_balance IN NUMBER
    );

    PROCEDURE UpdateCustomer(
        p_customerid IN NUMBER,
        p_name IN VARCHAR2,
        p_dob IN DATE,
        p_balance IN NUMBER
    );

    FUNCTION GetCustomerBalance(
        p_customerid IN NUMBER
    ) RETURN NUMBER;
END CustomerManagement;
/

CREATE OR REPLACE PACKAGE BODY CustomerManagement AS

    PROCEDURE AddCustomer(
        p_customerid IN NUMBER,
        p_name IN VARCHAR2,
        p_dob IN DATE,
        p_balance IN NUMBER
    ) AS
    BEGIN
        INSERT INTO Customers(CustomerID, Name, DOB, Balance, LastModified)
        VALUES (p_customerid, p_name, p_dob, p_balance, SYSDATE);

        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Customer added successfully.');
    END AddCustomer;


    PROCEDURE UpdateCustomer(
        p_customerid IN NUMBER,
        p_name IN VARCHAR2,
        p_dob IN DATE,
        p_balance IN NUMBER
    ) AS
    BEGIN
        UPDATE Customers
        SET Name = p_name,
            DOB = p_dob,
            Balance = p_balance,
            LastModified = SYSDATE
        WHERE CustomerID = p_customerid;

        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Customer updated successfully.');
    END UpdateCustomer;


    FUNCTION GetCustomerBalance(
        p_customerid IN NUMBER
    ) RETURN NUMBER AS
        v_balance NUMBER;
    BEGIN
        SELECT Balance INTO v_balance
        FROM Customers
        WHERE CustomerID = p_customerid;

        RETURN v_balance;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            DBMS_OUTPUT.PUT_LINE('Customer not found.');
            RETURN NULL;
    END GetCustomerBalance;

END CustomerManagement;
/

BEGIN
    CustomerManagement.AddCustomer(
        4,
        'Arun',
        TO_DATE('1999-03-12','YYYY-MM-DD'),
        8000
    );
END;
/

BEGIN
    CustomerManagement.UpdateCustomer(
        4,
        'Arun Kumar',
        TO_DATE('1999-03-12','YYYY-MM-DD'),
        9500
    );
END;
/

BEGIN
    DBMS_OUTPUT.PUT_LINE(
        'Balance = ' || CustomerManagement.GetCustomerBalance(4)
    );
END;
/