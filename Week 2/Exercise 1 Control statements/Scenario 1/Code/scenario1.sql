SET SERVEROUTPUT ON;

DECLARE
    v_age NUMBER;
BEGIN
    FOR cust_rec IN (SELECT CustomerID, DOB FROM Customers) LOOP
        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, cust_rec.DOB) / 12);

        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust_rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE('1% discount applied to loans of Customer ID: ' || cust_rec.CustomerID);
        END IF;
    END LOOP;

    COMMIT;
END;
/