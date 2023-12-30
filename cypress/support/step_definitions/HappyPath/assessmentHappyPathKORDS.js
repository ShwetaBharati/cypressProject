import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

const genericFunction1 = require("../../../e2e/pages/genericFunction1");
const assessPage = require("../../../e2e/pages/assessment");
const userData = require("../../../fixtures/userData");

var mechanicalOPCodeandValue = new Array;



Given("Login with valid email and password", () => {
  cy.visit("/");
  genericFunction1.typeEvent(assessPage.emailId, userData.email);
  genericFunction1.typeEvent(assessPage.password, userData.password);
  genericFunction1.clickEvent(assessPage.login);
});


Given("Give your email and passwor {string} and {string}", (email, password) => {
  cy.visit("/");
  genericFunction1.typeEvent(assessPage.emailId, email);
  genericFunction1.typeEvent(assessPage.password, password);
  genericFunction1.clickEvent(assessPage.login);
});


When("User gets StockId of {string} for {string} store from {string}", (vehicalType, storeName, option) => {
  cy.wait(20000);
  cy.get('.navbar-toggler').click({ force: true });
  cy.wait(2000);
  cy.xpath('//a[text()="' + option + '"]').then(text1 => {
    // let option = text1
    cy.log("+++++++++++ ", text1.text());
    cy.xpath('//a[text()="' + option + '"]').click();
  })
  genericFunction1.getstockID1(vehicalType, storeName);
  cy.wait(6000);
  genericFunction1.clickEvent(assessPage.reconPartnersImage)
  cy.wait(10000);
});


When("User provides StockId", () => {
  cy.wait(10000);
  genericFunction1.clickEvent(assessPage.leftArrowIcon);
  cy.wait(2000);
  genericFunction1.readStockIDTextFile("ardrg")
  //  genericFunction1.typeEvent(assessPage.stockIdtext, assessPage.stockid); 
});


When("Select Store {string}", (storeName) => {
  cy.wait(10000);
  cy.get('[formcontrolname="store"]').select(storeName);
});


When("User starts {string}", (assessmentName) => {
  //  cy.wait(10000);
  genericFunction1.OpenAssingment(assessmentName);
});


When("User selects and {string} Car for Assessment", (buttonCaption) => {
  genericFunction1.clickAtButton(buttonCaption);
  cy.wait(6000);
});


When("User selects Details in tools", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.toolsDetail);
});


When("User selects Panel buff {string} in Details", (HeaderCode) => {
  cy.wait(2000);
  genericFunction1.selectHeader2(HeaderCode);
});


When("User selcts Quarter from panel in Rear location from Passenger Side", () => {
  cy.wait(2000);
  genericFunction1.clickEventForce("#QR_RE_PA");
});


When("User selects Haze {string} in Details", (HeaderCode) => {
  cy.wait(2000);
  genericFunction1.selectHeader2(HeaderCode);
});


When("User selects tail Light in Rear location from Driver Side", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.tailLightRearDriver);
});


When("User selects Paint in tools", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.toolsPaint);
});


When("User selects Touch up {string} in Paint", (HeaderCode) => {
  cy.wait(2000);
  genericFunction1.selectHeader2(HeaderCode);
});


When("User selects Bumper from panel in Rear location from Driver Side", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.bumperRearDriver);
});


When("User selects Bumper from panel in Rear location from Passenger Side", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.bumperRearPassenger);
});


When("User selects Bumper from panel in Front location from Driver Side", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.bumperFrontDriver);
});


When("User selects Bumper from panel in Front location from Passenger Side", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.bumperFrontPassenger);
});


When("User selects Plastic Paint {string} in Paint", (HeaderCode) => {
  cy.wait(2000);
  genericFunction1.selectHeader2(HeaderCode);
});


When("User selects Luggage Rack from panel from Passenger Side", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.luggageRackPassenger);
});


When("User selects Door Molding from panel in Front location from Passenger Side", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.doorMoldingFrontPassenger);
});


When("User selects Metal Paint {string} in Paint", (HeaderCode) => {
  cy.wait(2000);
  genericFunction1.selectHeader2(HeaderCode);
});


When("User selects Hood for metal painting", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.hoodMetalPainting);
});


When("User selects Trunk Gate in Rear location", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.trunkGateRear);
});


When("User selects Door from panel in Front location from Driver Side", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.doorFrontDriverMP);
});


When("User selects Dent Removal in tools", () => {
  cy.wait(2000);
  genericFunction1.clickEvent("h2:contains('Dent Removal')");
});


When("User selects PDR {string} in Dent Removal", (HeaderCode) => {
  cy.wait(2000);
  genericFunction1.selectHeader2(HeaderCode);
});


When("User selects Gas door from panel in rear location from driver side", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.gasDoorRearDriver);
});


When("User selects Piller from panel in rear location from Passenger side", () => {
  cy.wait(2000);
  genericFunction1.clickEventForce(assessPage.pillerRearPassenger);
});


When("User selects Rocker from panel in rear location from Passenger side", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.rockerRearPassenger);
});


When("User selects Wheel in tools", () => {
  cy.wait(2000);
  genericFunction1.clickEvent("h2:contains('Wheel')");
});


When("User selects Refinish {string} in Wheel", (HeaderCode) => {
  cy.wait(2000);
  genericFunction1.selectHeader2(HeaderCode);
});


When("User selects Wheel in Front location from Driver side at Refinish", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.wheelFrontDriverRefinish);
});


When("User selects Wheel in Rear location from Driver side at Refinish", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.wheelRearDriverRefinish);
});


When("User selects Machined Finish {string} in Wheel", (HeaderCode) => {
  cy.wait(2000);
  genericFunction1.selectHeader2(HeaderCode);
});


When("User selects Wheel in Front location from Passenger side at Machined Finish", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.wheelFrontPassengerMachinedFinish);
});


When("User selects Wheel in Rear location from Passenger side at Machined Finish", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.wheelRearPassengerMachinedFinish);
});


When("User selects Glass in tools", () => {
  cy.wait(2000);
  genericFunction1.clickEvent("h2:contains('Glass')");
});


When("User selects Chip {string} in Glass", (HeaderCode) => {
  cy.wait(2000);
  genericFunction1.selectHeader2(HeaderCode);
});


When("User selects Windshield panel from Front location", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.windshieldFront);
});


When("User navigates to Interior", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.interiorTabAssessment);
});


When("User selects Interior in tools", () => {
  cy.wait(2000);
  genericFunction1.clickEvent("h2:contains('Interior')");
});


When("User selects Damage {string} in Interior", (HeaderCode) => {
  cy.wait(2000);
  genericFunction1.selectHeader2(HeaderCode);
});


When("User selects Seat Cushion from panel in Front location from Driver side", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.seatCushionFrontDriver);
  genericFunction1.selectfromtable
});


When("User selects Seat Cushion from panel in Front location from Passenger side", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.seatCushionFrontPassenger);
});


When("User selects Carpet from panel in Cargo location from Passenger side", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.carpetCargoPassenger);
});


When("User selects Door Panel in Front location from Passenger side", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.doorFrontPassenger);
});


When("User selects Door Panel in Front location from Driver side", () => {
  cy.wait(2000);
  genericFunction1.clickEvent(assessPage.doorFrontDriver);
});


When("User navigates to Summary", () => {
  cy.wait(2000);
  genericFunction1.clickEvent("#summaryTab");
});


When("User gets invoiced amounts", () => {
  cy.wait(2000);
  genericFunction1.getMultipleValues(assessPage.assessmentPriceHeadings);
  console.log("storeNameAndPrice.get('Dent Removal')from steps:-" + genericFunction1.storeNameAndPrice.get("Dent Removal"))
  genericFunction1.readFromFile();

});




Then("User submits Assessments done on car by clicking at {string}", (buttonCaption) => {
  cy.wait(2000);
  genericFunction1.clickAtButton(buttonCaption);
  cy.wait(3000);
});


When("User Provides RONumber for invoice and {string}", (buttonCaption) => {
  genericFunction1.typeEvent("[placeholder='RO Number']", "ROn" + genericFunction1.getDate());
  cy.wait(10000);
  genericFunction1.clickAtButton(buttonCaption);
    cy.wait(3000);
});


When("User Approves the Assessment by clicking at {string}", (buttonCaption) => {
  cy.wait(6000);
  genericFunction1.clickAtButtonForce(buttonCaption);
    cy.wait(3000);
});


When("User gets OP cade and value for Mechanical assessment", () => {

  let temp = cy.get(".ng-untouched.ng-pristine.ng-valid > :nth-child(3) > span").text();
  cy.log('TempPP>>>', temp);
  mechanicalOPCodeandValue.push(temp);
  cy.log("temp:- " + temp);
  let temp1;
  cy.get(".ng-untouched.ng-pristine.ng-valid > :nth-child(6) > span").invoke('text').as('textFunction');
  temp1 = this.textFunction;
  mechanicalOPCodeandValue.push(temp1);
  cy.log("temp1:- " + temp1);
  cy.wait(2000);


  // Here array.values() function is called.
  var iterator = mechanicalOPCodeandValue.values();

  // Here all the elements of the array is being printed.
  for (let elements of iterator) {
    cy.log(elements);
  }




});


When("User selects {string} from tool", (toolname) => {
  cy.wait(2000);
  cy.get('[formcontrolname="opCodeId"]').select(toolname);
});



When("User finishes Mechanical assessment by clicking at {string}", (buttonCaption) => {
  cy.wait(6000);
  genericFunction1.clickAtButton(buttonCaption);
  cy.wait(3000);
});


When("User Approves the Recon Packaging by clicking at {string}", (buttonCaption) => {
  //  cy.get('[data-test=submitIsVisible]', { timeout: 10000 })
  //  cy.get('app-wholesale-button > .btn', { timeout: 10000 }).should('be.visible');
  genericFunction1.clickAtButtonForce(buttonCaption);
  cy.wait(3000);
});


When("User {string} Vendor for details", (buttonCaption) => {
  cy.wait(2000);
  cy.get('[formcontrolname="vendorId"]').select(1);
  cy.wait(2000);
  genericFunction1.getAndSaveVendorName();
  cy.wait(2000);
  genericFunction1.clickAtButton(buttonCaption);
  cy.wait(6000);
});


When("User Provides invoice number for details and {string}", (buttonCaption) => {
  genericFunction1.checkTextDetail(buttonCaption)
});


When("User {string} Porter to Sales", (buttonCaption) => {
  genericFunction1.clickAtButton(buttonCaption);
    cy.wait(3000);
});


When("User {string} Vendor for Paint", (buttonCaption) => {
  cy.wait(2000);
  cy.get('[formcontrolname="vendorId"]').select(1);
  cy.wait(2000);
  genericFunction1.getAndSaveVendorName();
  cy.wait(2000);
  genericFunction1.clickAtButton(buttonCaption);
  cy.wait(6000);
});


When("User Provides invoice number for Paints and {string}", (buttonCaption) => {
  genericFunction1.checkTextPaint(buttonCaption);
});



When("User {string} Vendor for Wheel", (buttonCaption) => {
  cy.wait(2000);
  cy.get('[formcontrolname="vendorId"]').select(1);
  cy.wait(2000);
  genericFunction1.getAndSaveVendorName();
  cy.wait(2000);
  genericFunction1.clickAtButton(buttonCaption);
  cy.wait(4000);
});




When("User Provides invoice number for Wheels and {string}", (buttonCaption) => {
  genericFunction1.checkTextWheel(buttonCaption)
});


When("User {string} Vendor for Glass", (buttonCaption) => {
  cy.wait(2000);
  cy.get('[formcontrolname="vendorId"]').select(1);
  cy.wait(2000);
  genericFunction1.getAndSaveVendorName();
  cy.wait(2000);
  genericFunction1.clickAtButton(buttonCaption);
  cy.wait(6000);
});


When("User completes Glass assessment and {string}", (buttonCaption) => {
  genericFunction1.clickAtButton(buttonCaption);
  cy.wait(3000);
});


When("User {string} Vendor for Interior", (buttonCaption) => {
  cy.wait(2000);
  cy.get('[formcontrolname="vendorId"]').select(1);
  cy.wait(2000);
  genericFunction1.getAndSaveVendorName();
  cy.wait(2000);
  genericFunction1.clickAtButton(buttonCaption);
  cy.wait(6000);
});


When("User Provides invoice number for Interior and {string}", (buttonCaption) => {
  genericFunction1.checkTextInterior(buttonCaption);
  //  genericFunction1.typeEvent("[placeholder='Invoice Number']", "Interiords-" + genericFunction1.getDate());
  //  genericFunction1.clickAtButton(buttonCaption);
  //  cy.wait(20000);
});


When("User {string} Vendor for Dent Removal", (buttonCaption) => {
  cy.wait(2000);
  cy.get('[formcontrolname="vendorId"]').select(1);
  cy.wait(2000);
  genericFunction1.getAndSaveVendorName();
  cy.wait(2000);
  genericFunction1.clickAtButton(buttonCaption);
  cy.wait(6000);
});


When("User Provides invoice number for Dent Removal and {string}", (buttonCaption) => {
  genericFunction1.checkTextDentRemoval(buttonCaption);
  //  cy.wait(20000);
});

When("User {string} Photo Final", (buttonCaption) => {
  genericFunction1.clickAtButton(buttonCaption);
    cy.wait(3000);
});


When("User completes Final Inspection by clicking at {string}", (buttonCaption) => {
  genericFunction1.clickAtButton(buttonCaption);
    cy.wait(3000);
});


When("User gets summary of finished car", () => {
  cy.wait(8000);
  cy.get(assessPage.openSummary).click()
  cy.wait(10000)
  genericFunction1.getVendorValues1()
  //  genericFunction1.getVendorList()
  cy.wait(5000);
  genericFunction1.getVendorValuesFromFile();


});


When("User navigates to {string} option", (option) => {
  cy.wait(20000);
  cy.get('.navbar-toggler').click({ force: true });
  cy.wait(2000);
  cy.xpath('//a[text()="' + option + '"]').click();
});


Then("user gets {string} row value from Accounting table", (rowOption) => {
  genericFunction1.getInvoiceValueFromRow(rowOption);

});


When("User adds more work for Mechanical Advising", () => {
  cy.wait(5000);
  genericFunction1.clickEvent(assessPage.addMoreWork_MA_MA_FI);
  cy.wait(2000);
  genericFunction1.selectByIndex(assessPage.selectTool, 1)
});


When("User Adds more work {string} {string} {string} {string} {string} from {string}", (categoryId, subCategoryId, carLayoutPanelId, carLayoutLocationId, carLayoutSideId, stage) => {
  cy.wait(5000);
  genericFunction1.clickEvent(assessPage.addMoreWorkApproval_FI);
  cy.wait(2000);
  genericFunction1.addWorkForm(categoryId, subCategoryId, carLayoutPanelId, carLayoutLocationId, carLayoutSideId, stage)
});


When("User adds more work in Mechanical assessment", () => {
  cy.wait(5000);
  genericFunction1.clickEvent(assessPage.addMoreWork_MA_MA_FI);
  cy.wait(2000);
  genericFunction1.selectByIndex(assessPage.selectToolSecond, 2)
});


When("User adds more work in Final Inspection", () => {
  cy.wait(5000);
  genericFunction1.clickEvent(assessPage.addMoreWorkApproval_FI);
  cy.wait(2000);
  genericFunction1.addWorkForm(categoryId, subCategoryId, carLayoutPanelId, carLayoutLocationId, carLayoutSideId, stage)
});



When("User {string} Photo First", (buttonCaption) => {
  genericFunction1.clickAtButton(buttonCaption);
  cy.wait(3000);
});


When("User {string} Porter to Assessment", (buttonCaption) => {
  genericFunction1.clickAtButton(buttonCaption);
  cy.wait(3000);
});



Then ("User rejects the details and {string}",(buttonCaption) =>{
  genericFunction1.rejectsTheDetailsAction();
  genericFunction1.clickAtButton(buttonCaption);
  cy.wait(3000);
});


Then ("{string} validation message displayed",(message)=>{
  cy.xpath('//div[@id="toast-container"]//div/div').then(text=>{
    toastMessage=text.text();
    assert.strictEqual(toastMessage," "+ message +" ");
  })
});


Then ("User rejects assessment on final inspection and {string}",(buttonCaption)=>{
  cy.wait(3000);
  cy.xpath("//input[contains(@id,'reject-0')]").click(({force: true}));
  cy.wait(1000);
  genericFunction1.clickAtButton(buttonCaption);
  cy.wait(3000);
});


When ("User start with {string}",(assessmentName)=>{
  cy.wait(8000);
  cy.xpath("//div[text()='" + assessmentName + "']/../..").click();
  cy.wait(2000);
  cy.get(".dropdown-menu.show > ul").each((e1, index, list) => {
    const clickElements = e1.text()   
    if(clickElements.includes("Start")){
      cy.xpath("//div[@class='dropdown-menu show']//a[text()='Start ']").click(); 
    }else{
      if(clickElements.includes("Resume")){
        cy.get('a').contains('Resume').click({force: true});
      }
    }
  })
  cy.wait(8000);
} );