SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Monthly interest processed successfully for all savings accounts.');
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/

SELECT AccountID, CustomerID, AccountType, Balance
FROM Accounts;