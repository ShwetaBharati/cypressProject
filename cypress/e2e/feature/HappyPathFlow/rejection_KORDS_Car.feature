Feature: Rejection flow of Car for KOR - DS store

Scenario: Complete work on Assessment
        Given Login with valid email and password

        When Select Store "KOR - DS"
        When User gets StockId of "Car" for "KOR - DS" store from "Inventory"
        When User provides StockId

        When User starts "Assessment"
        #       When User selects and "Save" Car for Assessment
        When User selects Details in tools
        When User selects Panel buff "PB" in Details
        When User selcts Quarter from panel in Rear location from Passenger Side

        When User selects Haze "HZ" in Details
        When User selects tail Light in Rear location from Driver Side

        When User selects Paint in tools
        When User selects Touch up "TU" in Paint
        When User selects Bumper from panel in Rear location from Driver Side
        When User selects Bumper from panel in Rear location from Passenger Side
        When User selects Bumper from panel in Front location from Driver Side
        When User selects Bumper from panel in Front location from Passenger Side

        When User selects Plastic Paint "PP" in Paint
        When User selects Door Molding from panel in Front location from Passenger Side

        When User selects Metal Paint "MP" in Paint
        When User selects Hood for metal painting
        When User selects Trunk Gate in Rear location
        When User selects Door from panel in Front location from Driver Side

        When User selects Dent Removal in tools
        When User selects PDR "PD" in Dent Removal
        When User selects Gas door from panel in rear location from driver side
        When User selects Piller from panel in rear location from Passenger side
        When User selects Rocker from panel in rear location from Passenger side

        When User selects Wheel in tools
        When User selects Refinish "RF" in Wheel
        When User selects Wheel in Front location from Driver side at Refinish
        When User selects Wheel in Rear location from Driver side at Refinish

        When User selects Machined Finish "MA" in Wheel
        When User selects Wheel in Front location from Passenger side at Machined Finish
        When User selects Wheel in Rear location from Passenger side at Machined Finish

        When User selects Glass in tools
        When User selects Chip "CH" in Glass
        When User selects Windshield panel from Front location

        When User navigates to Interior
        When User selects Interior in tools
        When User selects Damage "DM" in Interior
        When User selects Seat Cushion from panel in Front location from Driver side
        When User selects Seat Cushion from panel in Front location from Passenger side
        When User selects Carpet from panel in Cargo location from Passenger side
        When User selects Door Panel in Front location from Passenger side
        When User selects Door Panel in Front location from Driver side
        When User navigates to Summary
        #        When User gets invoiced amounts
        Then User submits Assessments done on car by clicking at "Submit"
        Then "Vehicle assessment completed successfully." validation message displayed

 Scenario: Complete work on Mechanical Advising
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Mechanical Advising"
        When User Provides RONumber for invoice and "Submit"
        Then "Mechanical advising submitted successfully." validation message displayed

   Scenario: Complete work on Approval
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Approval"
        When User Approves the Assessment by clicking at "Approve"
        Then "Approval submitted successfully." validation message displayed

    Scenario: Complete work on Mechanical assessment
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Mechanical assessment"
        #   When User gets OP cade and value for Mechanical assessment[Not complete]
        #   When User selects "Air Filter" from tool
        When User finishes Mechanical assessment by clicking at "Finish"
        Then "Mechanical completed successfully." validation message displayed

    Scenario: Complete work on Recon Packaging
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Recon Packaging"
        When User Approves the Recon Packaging by clicking at "Approve"
        Then "Recon package approved successfully." validation message displayed

Scenario: User rejects assessment on Details
    Given Login with valid email and password
     When Select Store "KOR - DS"
     When User provides StockId
     Then User starts "Detail"
     When User "Select" Vendor for details
     Then User rejects the details and "Submit"
     Then "Work submitted successfully." validation message displayed

Scenario: Complete work on Approval
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User start with "Approval" 
        When User Approves the Assessment by clicking at "Approve"
        Then "Approval submitted successfully." validation message displayed

Scenario: Complete work on Detail
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Detail"
        When User "Select" Vendor for details
        When User Provides invoice number for details and "Submit"
        Then "Work submitted successfully." validation message displayed

 Scenario: User reject assessment on Porter to Sales
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Porter to Sales"
        Then User rejects the details and "Submit"
        Then "Work submitted successfully." validation message displayed

 Scenario: Complete work on Approval
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User start with "Approval" 
        When User Approves the Assessment by clicking at "Approve"
        Then "Approval submitted successfully." validation message displayed

Scenario: Complete work on Porter to Sales
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Porter to Sales"
        When User "Submit" Porter to Sales
        Then "Work submitted successfully." validation message displayed

    Scenario: User rejects assessment on Paint
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Paint"
        When User "Select" Vendor for Paint
        Then User rejects the details and "Submit"
        Then "Work submitted successfully." validation message displayed

    Scenario: Complete work on Approval
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User start with "Approval" 
        When User Approves the Assessment by clicking at "Approve"
        Then "Approval submitted successfully." validation message displayed

    Scenario: Complete work on Paint
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Paint"
        When User "Select" Vendor for Paint
        When User Provides invoice number for Paints and "Submit"
        Then "Work submitted successfully." validation message displayed

    Scenario:  User rejects assessment on Wheel
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Wheel"
        When User "Select" Vendor for Wheel
        Then User rejects the details and "Submit"
        Then "Work submitted successfully." validation message displayed

    Scenario: Complete work on Approval
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User start with "Approval" 
        When User Approves the Assessment by clicking at "Approve"
        Then "Approval submitted successfully." validation message displayed

    Scenario: Complete work on Wheel
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Wheel"
        When User "Select" Vendor for Wheel
        When User Provides invoice number for Wheels and "Submit"
        Then "Work submitted successfully." validation message displayed

    Scenario: User rejects assessment on Glass
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Glass"
        When User "Select" Vendor for Glass
        Then User rejects the details and "Submit"
        Then "Work submitted successfully." validation message displayed

    Scenario: Complete work on Approval
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User start with "Approval" 
        When User Approves the Assessment by clicking at "Approve"
        Then "Approval submitted successfully." validation message displayed

    Scenario: Complete work on Glass
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Glass"
        When User "Select" Vendor for Glass   
        When User completes Glass assessment and "Submit"
        Then "Work submitted successfully." validation message displayed

    Scenario: Complete work on Interior
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Interior"
        When User "Select" Vendor for Interior
        Then User rejects the details and "Submit"
        Then "Work submitted successfully." validation message displayed
       
    Scenario: Complete work on Approval
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User start with "Approval" 
        When User Approves the Assessment by clicking at "Approve"
        Then "Approval submitted successfully." validation message displayed

    Scenario: Complete work on Interior
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Interior"
        When User "Select" Vendor for Interior
        When User Provides invoice number for Interior and "Submit"
        Then "Work submitted successfully." validation message displayed

    Scenario: Complete work on Dent Removal
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Dent Removal"
        When User "Select" Vendor for Dent Removal
        Then User rejects the details and "Submit"
        Then "Work submitted successfully." validation message displayed
        
    Scenario: Complete work on Approval
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User start with "Approval" 
        When User Approves the Assessment by clicking at "Approve"
        Then "Approval submitted successfully." validation message displayed
        
    Scenario: Complete work on Dent Removal
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Dent Removal"
        When User "Select" Vendor for Dent Removal
        When User Provides invoice number for Dent Removal and "Submit"
         Then "Work submitted successfully." validation message displayed

Scenario: Complete work on Final photo
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Photo Final"
        Then User rejects the details and "Submit"
        Then "Work submitted successfully." validation message displayed

Scenario: Complete work on Approval
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User start with "Approval" 
        When User Approves the Assessment by clicking at "Approve"
        Then "Approval submitted successfully." validation message displayed

Scenario: Complete work on Final photo
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Photo Final"
        When User "Submit" Photo Final
        Then "Work submitted successfully." validation message displayed

Scenario: User rejects assessment on Final Inspection
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Final Inspection"
        Then User rejects assessment on final inspection and "Finish"
        Then "Final inspection submitted successfully." validation message displayed

Scenario: Complete work on Dent Removal
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Dent Removal"
        When User "Select" Vendor for Dent Removal
        When User Provides invoice number for Dent Removal and "Submit"
        Then "Work submitted successfully." validation message displayed

 Scenario: Complete work on Final Inspection
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Final Inspection"
        When User completes Final Inspection by clicking at "Finish"
        Then "Final inspection submitted successfully." validation message displayed



    Scenario: Verify Prices with vendor
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User gets summary of finished car
        When User navigates to "Accounting" option
        Then user gets "Invoice" row value from Accounting table           