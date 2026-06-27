SET SERVEROUTPUT ON;

BEGIN
    FOR cust_rec IN (SELECT CustomerID, Balance FROM Customers) LOOP
        IF cust_rec.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust_rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE('Customer ID ' || cust_rec.CustomerID || ' promoted to VIP.');
        ELSE
            UPDATE Customers
            SET IsVIP = 'FALSE'
            WHERE CustomerID = cust_rec.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
END;
/

SELECT CustomerID, Name, Balance, IsVIP
FROM Customers;