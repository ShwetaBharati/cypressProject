Feature: Rejection flow of Truck for KOR - DS





    Scenario: Verify Prices with vendor
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User gets summary of finished car
        When User navigates to "Accounting" option
        Then user gets "Invoice" row value from Accounting table           