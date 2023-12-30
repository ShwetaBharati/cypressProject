Feature: Temporary feature file to test and check




    Scenario: Complete work on Paint
        Given Login with valid email and password
        When Select Store "KOR - DB"
        When User provides StockId

        When User starts "Paint"
        When User "Select" Vendor for Paint
        When User Provides invoice number for Paints and "Submit"