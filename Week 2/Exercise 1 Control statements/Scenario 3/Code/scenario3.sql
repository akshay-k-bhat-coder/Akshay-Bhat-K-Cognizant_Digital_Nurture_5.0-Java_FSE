SET SERVEROUTPUT ON;

BEGIN
    FOR loan_rec IN (
        SELECT l.LoanID, l.CustomerID, c.Name, l.EndDate
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ID ' || loan_rec.LoanID ||
            ' for customer ' || loan_rec.Name ||
            ' is due on ' || TO_CHAR(loan_rec.EndDate, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/

SELECT LoanID, CustomerID, EndDate
FROM Loans
WHERE EndDate BETWEEN SYSDATE AND SYSDATE + 30;