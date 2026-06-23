SET SERVEROUTPUT ON;

CREATE OR REPLACE PACKAGE AccountOperations AS
    PROCEDURE OpenAccount(
        p_accountid IN NUMBER,
        p_customerid IN NUMBER,
        p_accounttype IN VARCHAR2,
        p_balance IN NUMBER
    );

    PROCEDURE CloseAccount(
        p_accountid IN NUMBER
    );

    FUNCTION GetTotalBalance(
        p_customerid IN NUMBER
    ) RETURN NUMBER;
END AccountOperations;
/

CREATE OR REPLACE PACKAGE BODY AccountOperations AS

    PROCEDURE OpenAccount(
        p_accountid IN NUMBER,
        p_customerid IN NUMBER,
        p_accounttype IN VARCHAR2,
        p_balance IN NUMBER
    ) AS
    BEGIN
        INSERT INTO Accounts(AccountID, CustomerID, AccountType, Balance, LastModified)
        VALUES (p_accountid, p_customerid, p_accounttype, p_balance, SYSDATE);

        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Account opened successfully.');
    END OpenAccount;


    PROCEDURE CloseAccount(
        p_accountid IN NUMBER
    ) AS
    BEGIN
        DELETE FROM Accounts
        WHERE AccountID = p_accountid;

        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Account closed successfully.');
    END CloseAccount;


    FUNCTION GetTotalBalance(
        p_customerid IN NUMBER
    ) RETURN NUMBER AS
        v_total NUMBER;
    BEGIN
        SELECT SUM(Balance) INTO v_total
        FROM Accounts
        WHERE CustomerID = p_customerid;

        RETURN NVL(v_total, 0);
    END GetTotalBalance;

END AccountOperations;
/

BEGIN
    AccountOperations.OpenAccount(
        3,
        1,
        'Savings',
        5000
    );
END;
/

SELECT AccountID, CustomerID, AccountType, Balance
FROM Accounts
WHERE AccountID = 3;

BEGIN
    DBMS_OUTPUT.PUT_LINE(
        'Total Balance = ' || AccountOperations.GetTotalBalance(1)
    );
END;
/

SELECT CustomerID, AccountID, Balance
FROM Accounts
WHERE CustomerID = 1;

BEGIN
    AccountOperations.CloseAccount(3);
END;
/

SELECT * 
FROM Accounts
WHERE AccountID = 3;