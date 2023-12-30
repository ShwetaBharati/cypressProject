Feature: End to end flow for Addition of work in KOR - DS for SUV

    Scenario: Complete work on Assessment
        Given Login with valid email and password
        
        When Select Store "KOR - DS"
        When User gets StockId of "SUV" for "KOR - DS" store from "Inventory"
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
        When User selects Luggage Rack from panel from Passenger Side
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
        


    Scenario: Complete work on Mechanical Advising
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Mechanical Advising"
        When User adds more work for Mechanical Advising
        When User Provides RONumber for invoice and "Submit"
        

    Scenario: Complete work on Approval
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Approval"
        When User Adds more work "Detail" "Haze" "Head Light" "Front" "Passenger" from "Approval"
        When User Approves the Assessment by clicking at "Approve"


    Scenario: Complete work on Mechanical assessment
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Mechanical assessment"
        When User adds more work in Mechanical assessment
        #        When User gets OP cade and value for Mechanical assessment		[Not complete]
        #        When User selects "Air Filter" from tool
        When User finishes Mechanical assessment by clicking at "Submit"     


    Scenario: Complete work on Approval
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Approval"
        When User Approves the Assessment by clicking at "Approve"
        


    Scenario: Complete work on Mechanical assessment
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Mechanical assessment"
        #        When User gets OP cade and value for Mechanical assessment		[Not complete]
        #        When User selects "Air Filter" from tool
        When User finishes Mechanical assessment by clicking at "Finish"      


    Scenario: Complete work on Recon Packaging
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Recon Packaging"
        When User Approves the Recon Packaging by clicking at "Approve"


    Scenario: Complete work on Detail
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Detail"
        When User "Select" Vendor for details
        When User Provides invoice number for details and "Submit"


    Scenario: Complete work on Porter to Sales
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId
        When User starts "Porter to Sales"
        When User "Submit" Porter to Sales        


    Scenario: Complete work on Paint
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Paint"
        When User "Select" Vendor for Paint
        When User Provides invoice number for Paints and "Submit"



    Scenario: Complete work on Wheel
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Wheel"
        When User "Select" Vendor for Wheel
        When User Provides invoice number for Wheels and "Submit"


    Scenario: Complete work on Glass
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Glass"
        When User "Select" Vendor for Glass
        When User completes Glass assessment and "Submit"



    Scenario: Complete work on Interior
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Interior"
        When User "Select" Vendor for Interior
        When User Provides invoice number for Interior and "Submit"


    Scenario: Complete work on Dent Removal
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Dent Removal"
        When User "Select" Vendor for Dent Removal
        When User Provides invoice number for Dent Removal and "Submit"      


    Scenario: Complete work on Final photo
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Photo Final"
        When User "Submit" Photo Final          


    Scenario: Complete work on Final Inspection
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Final Inspection"
        When User Adds more work "Dent Removal" "PDR" "Door" "Front" "Driver" from "Final Inspection"
        When User completes Final Inspection by clicking at "Finish"        



    Scenario: Complete work on Approval
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Approval"
        When User Approves the Assessment by clicking at "Approve"



    Scenario: Complete work on Dent Removal
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Dent Removal"
        When User "Select" Vendor for Dent Removal
        When User Provides invoice number for Dent Removal and "Submit"
        
        

    Scenario: Complete work on Final Inspection
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User starts "Final Inspection"
        When User completes Final Inspection by clicking at "Finish"        



    Scenario: Verify Prices with vendor
        Given Login with valid email and password
        When Select Store "KOR - DS"
        When User provides StockId

        When User gets summary of finished car
        When User navigates to "Accounting" option
        Then user gets "Invoice" row value from Accounting table        