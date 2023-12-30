
//const assesspage = require("../pages/common");
//import {commonFunction} from ("../pages/common");

const assessPage = require("../pages/assessment");

class genericFunction1 {



  constructor(name) {
    this.setName(name);
  }
  getName() {
    return this.getName;
  }
  setName(newName) {
    this.name = newName;
  }
  a = 0;

  storeNameAndPrice = new Map()
  uniqueVendor = new Set()

  getValue() {
    cy.log("inside getvalue method ", this.a);
    var bb = this.a;
    //return bb;
    return new Promise(function (resolve, reject) {
      // some async operation here
      setTimeout(function () {
        // resolve the promise with some value
        resolve(bb);
      }, 1500);
      return bb;
    });
  }
  setValue(b) {
    this.a = b;
    cy.log("Value of a inside setValue method is ", this.a);
  }

  selectByValue(selector, value) {
    cy.get(selector).select(value);
  }

  selectByIndex(selector, index) {
    cy.get(selector).select(index);
  }

  clickEvent(selector) {
    cy.get(selector).click();
    cy.wait(6000);
  }

  clickEventForce(selector) {
    cy.get(selector).click({ force: true });
    cy.wait(6000);
  }

  clickAtButton(text) {
    cy.wait(6000);
    cy.get("button:contains('" + text + "')").click();
    //    cy.wait(6000);
  }

  clickAtButtonForce(text) {
    cy.get("button:contains('" + text + "')").click({ force: true });
    //    cy.wait(6000);
  }


  checkText(buttonCaption) {
    if (cy.get('[placeholder="Invoice Number"]').should('not.be.null')) {
      cy.log('True')
      this.clickAtButton(buttonCaption);
      cy.wait(6000);
    } else {
      cy.log('false')
      genericFunction1.typeEvent("[placeholder='Invoice Number']", "Interior-" + this.getDate());
      cy.wait(6000);
      this.clickAtButton(buttonCaption);
    }
  }


  getstockID1(vehicalType, storeName) {
    let arr = [];
    cy.wait(3000);
    cy.scrollTo("bottom");
    cy.get('table>tbody>tr').then((ele) => {
      let count = ele.length;
      //      cy.log("count +++++  "+count)

      for (let i = count; i > 0; i--) {
        //getting tota row
        //       cy.log('count is ',i)  
        cy.get(`tr:nth-child(${i})>td:nth-child(9)>div`).then(ele1 => {
          let rowText = ele1.text();
          //        cy.log("row text ++++++++++++ ",rowText);
          if (rowText.length === 0) {
            //         cy.log('falsseeeeeeeeeee run');
            cy.get(`tr:nth-child(${i})>td:nth-child(9)>div>input`).click({ force: true });
            cy.wait(2000);
            cy.xpath('(//button[@role="option"])[1]').click();
          }
        })
        cy.get(`tr:nth-child(${i})>td:nth-child(10)>div>input`).click();
        cy.wait(2000);
        cy.xpath('(//button[@role="option"])[1]').click();
        cy.get(`tr:nth-child(${i})>td:nth-child(11)>div`).then(text => {
          let factColorText = text.text();
          //          cy.log("factoty color code" + factColorText)
          if (factColorText === " " || factColorText === " -Select-") {
            return true;
          }
        })
        cy.get(`tr:nth-child(${i})>td:nth-child(12)>div`).then(text => {
          let Mileage = text.text();
          //          cy.log("factoty color code" + Mileage)
          if (Mileage.length === 0) {
            //            cy.log('falsseeeeeeeeeee run');
            cy.get(`tr:nth-child(${i})>td:nth-child(12)>div>input`).type("54886");
            cy.wait(2000);
          }
        })
        cy.get(`tr:nth-child(${i})>td:nth-child(13)>div>select`).select(vehicalType)
        cy.wait(3000);
        cy.get(`tr:nth-child(${i})>td:nth-child(2)>div>select`).select(storeName)
        cy.wait(3000);
        cy.get(`tr:nth-child(${i})>td:nth-child(5)>div`).then(testID => {
          let id = testID.text();
          cy.log("+++++++++++ dynamic stock id " + id)
          cy.writeFile('cypress/dataStored/stockId.txt', id, { flag: 'a+' })
        })
        cy.wait(2000);
        cy.get(`tr:nth-child(${i})>td:nth-child(15)>div>span>input`).click({ force: true });
        cy.wait(3000);
        cy.xpath('(//button[text()="Import Selected"])[2]').click();
        cy.wait(3000);
        break;
      }
    })
  }


  checkText1(buttonCaption) {
    if (cy.get('[placeholder="Invoice Number"]').should('not.be.null')) {
      //      cy.log('True')
      this.clickAtButton(buttonCaption);
      cy.wait(6000);
    } else {
      //      cy.log('false')
      genericFunction1.typeEvent("[placeholder='Invoice Number']", "DR-ds-" + this.getDate());
      cy.wait(6000);
      this.clickAtButton(buttonCaption);
    }
  }


  rejectsTheDetailsAction() {
    cy.wait(3000);
    cy.xpath("//input[contains(@id,'reject-0')]").click(({ force: true }));
    cy.wait(1000);
    cy.get("tr:nth-child(1)>td:nth-child(9)>select").select("Car not available");
    cy.get("tr:nth-child(1)>td:nth-child(11)>textarea").type("Car is not available");
    cy.wait(2000);
  }



  OpenAssingment(assessmentName) {
    cy.wait(8000);
    cy.get("button[aria-controls='Vehicle']").click({ force: true })
    cy.wait(4000);
    var tabControl;
    var tabText;
    cy.get("div.adviseHdr").each((e1, index, list) => {
      const tabList = e1.text()
      //      cy.log("amount:- " + tabList.substring(0, tabList.length - 10))
      tabText = tabList.substring(0, tabList.length - 10)
      //      cy.log("tabText:- " + tabText)

      if (tabText.includes(" ")) {
        tabControl = tabText.replace(/ /g, "");
        //        cy.log("tabControl:- " + tabControl)
      } else {
        tabControl = tabText
      }
      if (tabText.includes("Vehicle")) {
        //        cy.log("Not doing anything ")
      } else {
        //        cy.log("tabText:- " + tabText)
        //        cy.log("tabControl:- " + tabControl)
        //  Opening the vendor or mechanical assesment. 1st block
        cy.get("button[aria-controls='" + tabControl + "']").click({ force: true })
        cy.wait(4000);
        //            cy.scrollTo("bottom");
        //            cy.wait(8000);
        if (tabText.includes("Vendor")) {
          //          cy.log("assessmentName:- " + assessmentName)

          //  Start opens here for all vendor related assessment
          //              cy.get(".assest-Txt-conts:contains('" + assessmentName + "')").click({force: true})
          //  //div[text()='Interior']/../..


          cy.xpath("//div[text()='" + assessmentName + "']/../..").click();
          cy.wait(2000);
        } else {
          //  Start click at all others
          cy.get(".assest-Txt-conts:contains('" + tabText + "')").click({ force: true })
        }
        cy.wait(6000);
      }
      cy.log("OUTSIDE:- ")
    })
    cy.log("OUTSIDE ALL:- ")

    cy.wait(6000);
    cy.get(".dropdown-menu.show > ul").each((e1, index, list) => {
      const clickElements = e1.text()
      if (clickElements.includes("Start")) {
        if (assessmentName.includes("Paint") || assessmentName.includes("Wheel") || assessmentName.includes("Glass") || assessmentName.includes("Interior") || assessmentName.includes("Dent Removal")) {
          if (assessmentName.includes("Paint")) {
            //            cy.log("Paint start time:- " - + this.getDate())
            cy.xpath("//div[@class='dropdown-menu show']//a[text()='Start ']").click();
            //            cy.get('div.dropdown:nth-child(9) div.dropdown-menu ul li > a.dropdown-item').click();
          } else if (assessmentName.includes("Wheel")) {
            //            cy.log("Wheel start time:- " - + this.getDate())
            cy.xpath("//div[@class='dropdown-menu show']//a[text()='Start ']").click();
            //            cy.get('div.dropdown:nth-child(9) div.dropdown-menu ul li > a.dropdown-item').click();
          } else if (assessmentName.includes("Glass")) {
            //            cy.log("Glass start time:- " - + this.getDate())
            cy.xpath("//div[@class='dropdown-menu show']//a[text()='Start ']").click();
            //            cy.get('div.dropdown:nth-child(9) div.dropdown-menu.show ul li > a.dropdown-item').click();
          } else if (assessmentName.includes("Interior")) {
            //            cy.log("Interior start time:- " - + this.getDate())  //a[text()='Start ']
            cy.xpath("//div[@class='dropdown-menu show']//a[text()='Start ']").click();
            //            cy.get('[data-slick-index="3"] > :nth-child(1) > .slide > :nth-child(1) > .assest-Txt-conts').click({force: true});
          } else if (assessmentName.includes("Dent Removal")) {
            cy.log("Dent Removal start time:- " - + this.getDate())
            cy.xpath("//div[@class='dropdown-menu show']//a[text()='Start ']").click();
            //            cy.get('div.dropdown:nth-child(9) div.dropdown-menu ul li > a.dropdown-item').click();
          }
        } else {
          //          cy.log("START:- " + clickElements)
          cy.get('a').contains('Start').click();
        }
      } else {
        if (clickElements.includes("Resume")) {
          //          cy.log("RESUME:- " + clickElements)
          cy.get('a').contains('Resume').click({ force: true });
        }
      }

    })
    cy.wait(6000);
  }


  getMultipleValues(selector) {
    cy.wait(2000);
    var arr = new Array();
    cy.get(selector).each((iterator, index, list) => {
      arr.push(iterator.text())
      //      cy.log("arr inside" + arr.pop(index));
      //        this.saveInTextFile(iterator.text());
      this.getDataConvertedAndTrimmed(iterator.text());
    })

  }


  getText(selector) {
    cy.wait(2000);
    var textVar
    cy.get(selector).each((iterator, index, list) => {
      textVar = iterator.text()
      cy.log("textVar" + textVar);
      return textVar;
    })
  }


  saveInJSONFile(key, value) {
    //    cy.log("key saveInJSONFile:-" + key + "-");
    //    cy.log("value saveInJSONFile:-" + value + "-");
    //      cy.writeFile('cypress/downloads/data1.txt', key , value , { flag: 'a+' })
    cy.writeFile('cypress/downloads/data2.txt', { key, value }, { flag: 'a+' })
    cy.writeFile('cypress/downloads/data3.json', { key, value }, { flag: 'a+' })

    //      cy.writeFile(‘cypress/fixtures/test2.json’, { firstname: ‘Alapan’, lastname: ‘Das’ })
    let test1 = "\"" + key + "\": " + "\"" + value + "\","
    this.saveInTextFile(test1)
    //console.log("storeNameAndPrice.Length:-" + storeNameAndPrice.length)
    //    console.log("storeNameAndPrice.get('Dent Removal')saveInJSONFile:-" + this.storeNameAndPrice.get("Dent Removal"))
  }



  saveInTextFile(value) {
    //    console.log("value from saveInTextFile:-" + value + "--")
    cy.writeFile('cypress/downloads/data1.txt', value, { flag: 'a+' })
    //      cy.writeFile('cypress/downloads/data4.json', value, { flag: 'a+' })
    //    console.log("storeNameAndPrice.get('Dent Removal'):-" + this.storeNameAndPrice.get("Dent Removal"))
    this.storeNameAndPrice.get("Dent Removal")
  }


  readFromFile() {
    cy.readFile("cypress/downloads/data1.txt")
    //    console.log("cypress/downloads/data1.txt")
    cy.readFile("cypress/downloads/data2.txt")
    //    console.log("cypress/downloads/data2.txt")
    //      cy.readFile("cypress/downloads/data3.json")
    //      console.log("cypress/downloads/data3.json")
    //      cy.readFile("cypress/downloads/data4.json")
    //      console.log("cypress/downloads/data4.json")

  }




  getDataConvertedAndTrimmed(textToConvert) {
    const myArray = textToConvert.split("$");
    let tempFieldName1 = myArray[0];
    let tempFieldName = tempFieldName1.split("(");
    let fieldName = tempFieldName[0];
    fieldName = fieldName.substring(2, fieldName.length - 1)
    let fieldValue = myArray[1].replace(",", "");
    fieldValue = fieldValue.substring(0, fieldValue.length - 2)
    //    cy.log("fieldName after modification:-" + fieldName + "-");
    //    cy.log("fieldValue after modification:-" + fieldValue + "-");

    this.saveInJSONFile(fieldName, fieldValue)
    this.storeNameAndPrice.set(fieldName, fieldValue)
    //    console.log("storeNameAndPrice.get('Dent Removal')AfterSet:-" + this.storeNameAndPrice.get("Dent Removal"))
  }





  selectHeader2(HeaderCode) {
    cy.get('span').contains(HeaderCode).click();
  }



  typeEvent(selector, value) {
    cy.get(selector).first().type(value);
    //cy.xpath("//input[@type='text']").type("userData.email")
  }

  extractEvent(selector, value) {
    cy.get(selector).should(($div) => {
      const text = $div.text();
      //cy.log("Value of status is :",text);
      if (text === null)
        expect(text).to.match(/null/);
      else
        expect(text).to.match(value)
      //expect(text).to.include('foo')
      //expect(text).not.to.include('bar')
    })
    return selector;
  }

  convertTableDataIntoArray(table) {
    var dataSet = [];
    var i = 0;
    table.hashes().forEach((row) => {
      dataSet[i++] = row.value;
      //      cy.log("Value is :", row.variable);
      //      cy.log("Value ar :", row.value);
      //loginPage.submitLogin(row.username, row.password)
    })
    return dataSet;
  }

  isElementPresent(sel) {
    cy.get(sel);
    let a = 5;
    let ab = cy.get("body").then((body) => {
      if (body.find('button:contains(Login)').length > 0) {
        console.log("Yes!", body);
        return false
      }
      else {
        return true
      }
    }).then((value) => {
      return value;
    })
    return ab;
  }

  isElementDisable(sel) {
    cy.get(sel).then(($btn) => {
      if ($btn.hasClass('active')) {
        cy.log("yes");
        return false;
      } else {
        cy.log("no", $btn);
        return true;
      }
    })
  }

  isElemnetPresent(sel) {
    cy.get(sel).then(($btn) => {
      if ($btn.hasClass('active')) {
        return false;
        cy.log("yes")
      } else {
        return true;
        cy.log("no")
      }
    })
  }

  isElementEnable(sel, text) {
    let a = 0;
    let b = cy.get(sel).then(function ($btn) {
      if ($btn.hasClass('active')) {
        a = 1
        //return false;
      } else {
        a = 2;
        //return true;
      }
      return a;
    })
    return b;
  }

  isTextPresent(selector, text) {
    var flag = 0, a = 1;
    if (a === 1) {
      flag = 2;
    }
    cy.get(selector);
    cy.get("div>button").each((el) => {
      //console.log("element is ",el)
      if (el.text().includes(text)) {
        console.log('Setting flag')
        flag = 1;
      }
    });
    console.log('Returning flag')
    return flag;
  }

  checkException() {
    function First() {
      var a = 123;
      var b = 145;
      var c = a + b;
      try {
        cy.get('#login');
        return c;
      }
      catch (e) {
        return b;
      }
    }
    return First();
  }

  async elementExists(selector) {
    let waited = false
    async function waitOneSecond() {
      // return a promise that resolves after 1 second
      return new Cypress.Promise((resolve, reject) => {
        setTimeout(() => {
          // set waited to true
          waited = 1
          cy.get('body')
          // resolve with 'foo' string
          resolve('foo')
        }, 2000)
      })
    }
    if (await waitOneSecond()) {
      console.log("yes", waited);
    }
    else {
      console.log("No")
    }
  }

  elementExists1(selector) {
    cy.get(selector);
    cy.get('body').find(selector).then((length) => {
      var len = length.length;
      cy.log("length inside cy block ", len);
      this.setValue(len);
    })
  }
  sliderMove() {
    cy.get('#slider3 input').invoke('attr', 'value', 95).trigger('change');
    cy.get('#rangeSuccess').should('have.text', '95');
    cy.get("input[value='15']").invoke('val', 95).trigger('change');
  }
  update() {
    var cnt = 0;
    /*
          function f1(num) {
            console.log( "foo: " + num );
           
            //f1.count+=2;
            // keep track of how many times `foo` is called
          }
    */
    cy.get('body').then((length, cnt) => {
      //return new Cypress.Promise((resolve, reject) => {
      //if(1){resolve(4);}
      //      console.log("Inside body", length.length);
      cnt = length.length;
      console.log("==========================>", cnt);
    });

    //this.set(length.length);
    //console.log("Inside body",length.length);
    //return length.length;
    //});
    /*
        f1.count = 0;
        f1(5);
    */
    return cnt;    // 4       
  }



  getDate() {
    const currentDate = new Date();
    var current_Date = (currentDate.getMonth() + 1) + "-" + currentDate.getDate() + "-";
    var currentTime = currentDate.getHours() + "-" + currentDate.getMinutes();
    console.log(current_Date + currentTime)
    return current_Date + currentTime;
  }


  readWebtable(locator) {
    //  FROM MOHIT  to fetch tools column wtih respect to vendor
    //  "//td[text()='Magic Finish S']/parent::tr//td[8]"
    //  To get tools when vendor in blank or empty
    //  //td[text()]/parent::tr//td[4]


    //    locator = "//td[text()='Magic Finish S']/parent::tr//td[8]"

    //  get list of vendors present in vendor column
    let vendorSet = new Set();
    let vendorSet1 = new Set();
    vendorSet1 = cy.get("tbody[formarrayname='workOrderDetails'] tr td:nth-child(15)").each((iterator, index, list) => {
      //      cy.get(locator).each((iterator, index , list) => {        
      arr1.push(iterator.text())
      var check = iterator.text()
      if (check.trim() !== null || check.trim() !== "" || check.trim() !== " ") {
        //            uniqueVendor.add(check);
        vendorSet.add(check);
        //        cy.log("List of vendors:-" + check + "-")
        cy.writeFile('cypress/dataStored/VendorList.txt', check.trim() + ",", { flag: 'a+' })
        //        cy.log("SET SIZE INSIDE:-" + vendorSet.size)
      }
      //      cy.log("SET SIZE middle:-" + vendorSet.size)
      if (vendorSet.size == 5) {
        for (var element of vendorSet) {

          //          cy.log("vendor ELEMENT" + element);
          cy.writeFile('cypress/dataStored/VendorList1.txt', element.trim() + ",", { flag: 'a+' })
        }
      }
      //          return vendorSet
    })



    var Vendors = ["Magic Finish S", "LJ Interiors B", "CJM B", "Rick Hobert PDR B"]


    for (var i = 0; i < Vendors.length; i++) {
      //      cy.log("i:-" + i + "-")
      //      cy.log("vendortarrayvalue:-" + Vendors[i] + "-")
      locator = "//td[text()='" + Vendors[i] + "']/parent::tr//td[8]"
      //      "//td[text()='Magic Finish S']/parent::tr//td[8]"
      var arr1 = new Array();
      var arr2 = new Array();

      //      cy.log("LOCATOR OUTSIDE XPATH:-" + locator + "-")
      //      var tempVendor = Vendors[i] 
      cy.xpath(locator).each((iterator, index, list) => {
        //        arr3 = locator.split("'")
        //        cy.log("LOCATOR INSIDE XPATH:-" + locator + "-")
        //      cy.get(locator).each((iterator, index , list) => {        
        arr1.push(iterator.text())
        //        cy.log("BASED ON " + Vendors[i] + " :-" + iterator.text() + "-")

        //        cy.log("Vendors[i]:-" + Vendors[i] + "-")
        var path = "cypress/dataStored/" + Vendors[i] + ".txt"
        //        cy.log("path:-" + path + "-")
        if (iterator.text() == null || iterator.text() == "") {
          cy.writeFile(path, iterator.text() + ",", { flag: 'a+' })
          arr2.push(iterator.text())
        }

        //        cy.log("-------ITERATOR------");


      })
      //      cy.log("-------FOR------");
    }

  }



  getVendorValues(locator) {

    var Vendors = ["Magic Finish S", "LJ Interiors B", "CJM B", "Rick Hobert PDR B"]


    for (var i = 0; i < Vendors.length; i++) {
      //      cy.log("i OUTSIDE XPATH:-" + i + "-")
      //      cy.log("vendortarrayvalue:-" + Vendors[i] + "-")
      locator = "//td[text()='" + Vendors[i] + "']/parent::tr//td[8]"
      //      "//td[text()='Magic Finish S']/parent::tr//td[8]"
      var arr1 = new Array();
      var arr2 = new Array();

      cy.log("LOCATOR OUTSIDE XPATH:-" + locator + "-")
      //      var tempVendor = Vendors[i] 
      cy.xpath(locator).each((iterator, index, list) => {
        //        arr3 = locator.split("'")
        //        cy.log("i INSIDE XPATH:-" + i + "-")
        //        cy.log("LOCATOR INSIDE XPATH:-" + locator + "-")
        //      cy.get(locator).each((iterator, index , list) => {        
        arr1.push(iterator.text())
        //        cy.log("BASED ON " + Vendors[i] + " :-" + iterator.text() + "-")

        //        cy.log("Vendors[i]:-" + Vendors[i] + "-")
        var path = "cypress/dataStored/" + Vendors[i] + ".txt"
        //        cy.log("path:-" + path + "-")
        if (iterator.text() == null || iterator.text() == "") {
          cy.writeFile(path, iterator.text() + ",", { flag: 'a+' })
          arr2.push(iterator.text())
        }

        //        cy.log("-------ITERATOR------");


      })
      //      cy.log("-------FOR------");
    }

  }


  getVendorValues1() {

    this.readVendorNameRemoveDuplicate()

    cy.readFile("cypress/dataStored/vendorNameUnique.txt").then((fileContent) => {
      cy.log(fileContent)
      var rawFileContent = []
      rawFileContent = fileContent.split(",")
      cy.log("rawFileContent length" + rawFileContent.length)

      for (var i = 0; i < rawFileContent.length - 1; i++) {
        var locator = "//td[text()='" + rawFileContent[i] + "']/parent::tr//td[8]"
        this.callFortextfile(locator, rawFileContent[i])
      }
    })
  }

  callFortextfile(locator, vendorName) {
    cy.xpath(locator).each((iterator, index, list) => {

      //      cy.log("i INSIDE XPATH:-" + vendorName + "-")
      //      cy.log("LOCATOR INSIDE XPATH:-" + locator + "-")

      //      cy.log("BASED ON " + vendorName + " :-" + iterator.text() + "-")

      //      cy.log("Vendors[i]:-" + vendorName + "-")
      //      cy.log("-------ITERATOR------");
      cy.writeFile("cypress/dataStored/" + vendorName + ".txt", iterator.text() + ",", { flag: 'a+' })
      //              cy.writeFile('cypress/downloads/summaryTable.txt', iterator.text() +",",  { flag: 'a+' })

    })
  }


  getVendorValuesFromFile() {
    var Vendors = ["Magic Finish S", "LJ Interiors B", "CJM B", "Rick Hobert PDR B"]
    for (var i = 0; i < Vendors.length; i++) {
      //    var vendorPrices =   
      this.readPriceFromTextFile(Vendors[i])
    }

  }


  readPriceFromTextFile(fileName) {
    cy.readFile("cypress/dataStored/" + fileName + ".txt").then((fileContent) => {
      cy.log(fileContent)
      var rawFileContent = []
      rawFileContent = fileContent.split(",")
      var price = new Float32Array(rawFileContent.length - 1)
      //      cy.log("rawFileContent length" + rawFileContent.length)
      for (var i = 0; i < rawFileContent.length - 1; i++) {
        rawFileContent[i] = rawFileContent[i].trim()
        price[i] = +(rawFileContent[i])
        //        cy.log("rawFileContent:-" + rawFileContent[i] + "-")              
        //        cy.log("price:-" + price[i] + "-")              
      }
      //            cy.log("price length" + price.length)
      //      return price
    })
  }

  readStockIDTextFile(Name) {

    var fileName = "stockId"
    cy.readFile("cypress/dataStored/" + fileName + ".txt").then((fileContent) => {
      //      cy.log(fileContent)
      var rawFileContent
      rawFileContent = fileContent.trim()
      //      cy.log("rawFileContent length" + rawFileContent.length)
      //      cy.log("content of rawFileContent:-" + rawFileContent + "-")
      //if(Name !== "stockId"){
      this.typeEvent(assessPage.stockIdtext, rawFileContent);
      //}else{
      //  cy.xpath('//input[@formcontrolname="searchText"]').type("rawFileContent");
      //}


      //      return price
    })



  }


  getTableData() {
    const table = (cy.get("tbody[formarrayname='workOrderDetails']")).get(0);
    //      console.log("tableROWlength:-" + table.length)
    const data = Array.from(table.querySelectorAll("tr")).map((tr) =>
      Array.from(tr.children).map((td) => td.textContent)
    );
    console.log("data:-" + data + "-")
    return data;
  }


  getInvoiceValueFromRowOLD(rowOption) {
    let paytext, locator;
    var Vendors = ["LJ Interiors B", "Magic Finish S", "CJM B", "Rick Hobert PDR B"]
    //    this.readStockIDTextFile(TextFile)
    cy.xpath('//input[@formcontrolname="searchText"]').type("KG449138P");
    cy.wait(2000);
    for (let i = 0; i < Vendors.length; i++) {
      let invoiceTotal = 0;
      cy.log("inside 2nd for loop");
      locator = "//td[text()='" + Vendors[i] + "']//following-sibling::td[3]//span"
      cy.xpath(locator).each(text => {
        paytext = text.text().trim().replace(",", "");
        invoiceTotal = invoiceTotal + Math.round(paytext);
        cy.log("invpice total from table" + invoiceTotal)
        cy.writeFile("cypress/dataStored/account-" + Vendors[i] + ".txt", invoiceTotal + ",")
      })
      this.readFromTextFile(Vendors[i]);
      this.callFortextfileInvoice(Vendors[i])
    }
    // this.callFortextfile(locator, Vendors[i]) 
  }

  getInvoiceValueFromRow(rowOption) {
    let paytext, locator;
    //    var Vendors = ["LJ Interiors B", "Magic Finish S", "CJM B", "Rick Hobert PDR B"]
    cy.log("this is current FLOW")
    var Vendors = []
    cy.readFile("cypress/dataStored/vendorNameUnique.txt").then((fileContent) => {
      cy.log(fileContent)
      var rawFileContent = []
      rawFileContent = fileContent.split(",")
      cy.log("rawFileContent length" + rawFileContent.length)

      for (var i = 0; i < rawFileContent.length - 1; i++) {
        //    Vendors[i] = rawFileContent[i]
        Vendors.push(rawFileContent[i])

      }
      cy.log("Vendors INSIDE length" + Vendors.length)
    })


    cy.log("Vendors OUTSIDE length" + Vendors.length)



    cy.readFile("cypress/dataStored/stockId.txt").then((fileContent) => {
      cy.log("fileContent:-" + fileContent + "-fileContent");
      var stockIdContent = [];
      stockIdContent = fileContent.split(",")
      cy.xpath('//input[@formcontrolname="searchText"]').type(stockIdContent[0]);
      cy.wait(2000);
      for (let i = 0; i < Vendors.length; i++) {
        let invoiceTotal = 0;
        cy.log("inside 2nd for loop");
        locator = "//td[text()='" + Vendors[i] + "']//following-sibling::td[3]//span"
        cy.xpath(locator).each(text => {
          paytext = text.text().trim().replace(",", "");
          invoiceTotal = invoiceTotal + Math.round(paytext);
          cy.log("invpice total from table" + invoiceTotal)
          cy.writeFile("cypress/dataStored/account-" + Vendors[i] + ".txt", invoiceTotal + ",")
        })
        cy.log("VENDORS INSIDE STOCKID FUNCTION:-" + Vendors[i])
        this.readFromTextFile(Vendors[i]);
        this.callFortextfileInvoice(Vendors[i])
      }
    })
  }


  readFromTextFile(fileName) {
    let payFiletext, invoiceTotalFromFile = 0;
    cy.readFile("cypress/dataStored/" + fileName + ".txt").then((fileContent) => {
      var rawFileContent = []
      rawFileContent = fileContent.split(",")
      for (let i = 0; i < rawFileContent.length; i++) {
        payFiletext = rawFileContent[i].trim().replace(",", "");
        invoiceTotalFromFile = invoiceTotalFromFile + Math.round(payFiletext);
      };
      cy.log("invoice total value  from file +++++ ", invoiceTotalFromFile);
      cy.writeFile("cypress/dataStored/1" + fileName + ".txt", invoiceTotalFromFile + ",", { flag: 'a+' })

      // invoiceTotal=invoiceTotalFromFile;
      // var price = new Float32Array(rawFileContent.length-1)
      // cy.log("rawFileContent length" + rawFileContent.length)
      // for (var i = 0; i < rawFileContent.length - 1; i++) { 
      //   rawFileContent[i] = rawFileContent[i].trim()
      //   price[i] = +(rawFileContent[i])
      //   cy.log("rawFileContent:-" + rawFileContent[i] + "-")              
      //   cy.log("price:-" + price[i] + "-")              
      //       }
      //       cy.log("price length" + price.length)
    });
  }


  callFortextfileInvoice(fileName) {
    cy.readFile("cypress/dataStored/1" + fileName + ".txt").then((fileContent) => {
      var newFileContent = []
      newFileContent = fileContent.split(",")
      cy.log(" read from file ---- ", newFileContent[0]);
      cy.readFile("cypress/dataStored/account-" + fileName + ".txt").then((NewfileContent) => {
        var accountContent = []
        accountContent = NewfileContent.split(",")
        cy.log(" read from file inside ---- ", newFileContent[0]);
        cy.log(" read from file account ---- ", accountContent[0])
        assert.strictEqual(newFileContent[0], accountContent[0]);
      })
    })

  }


  addWorkForm(categoryId, subCategoryId, carLayoutPanelId, carLayoutLocationId, carLayoutSideId, stage) {
    cy.scrollTo("bottom");
    cy.get("table[summary='Add New Work']>tbody>tr").then((ele) => {
      let count = ele.length;
      cy.log("count +++++  " + count)
      cy.get(`table[summary="Add New Work"]>tbody>tr:nth-child(${count})>td:nth-child(1)>div select[formcontrolname="categoryId"]`).select(categoryId)
      cy.wait(2000)
      cy.get(`table[summary="Add New Work"]>tbody>tr:nth-child(${count})>td:nth-child(2)>div select[formcontrolname="subCategoryId"]`).select(subCategoryId)
      cy.wait(2000)
      cy.get(`table[summary="Add New Work"]>tbody>tr:nth-child(${count})>td:nth-child(3)>div select[formcontrolname="carLayoutPanelId"]`).select(carLayoutPanelId)
      cy.wait(2000)
      cy.get(`table[summary="Add New Work"]>tbody>tr:nth-child(${count})>td:nth-child(4)>div select[formcontrolname="carLayoutLocationId"]`).select(carLayoutLocationId)
      cy.wait(2000)
      cy.get(`table[summary="Add New Work"]>tbody>tr:nth-child(${count})>td:nth-child(5)>div select[formcontrolname="carLayoutSideId"]`).select(carLayoutSideId)
      cy.wait(4000)
    })
  }


  getVendorList() {

    let arr = [];
    cy.wait(3000);
    cy.scrollTo("bottom");
    cy.get("table tbody[formarrayname='workOrderDetails'] tr").then((ele) => {
      let count = ele.length;
      cy.log("count +++++  " + count)
      let totalVendors = []
      let j = 0
      for (let i = count; i > 0; i--) {
        //getting tota row
        //             cy.log('count is ',i)  

        cy.get(`tr:nth-child(${i})>td:nth-child(15)`).then(ele1 => {
          let rowText = ele1.text();
          //        cy.log("vendorNames:-" + rowText +"-")
          if (rowText !== null) {
            cy.log("IFLOOP-vendorNames:-" + rowText + "-")
          } else {
            cy.log("ELSEvendorNames:-" + rowText + "-")
            cy.log("j:-" + j + "-")
            totalVendors[j] = rowText
            j = j + 1
          }
        })

      }
    })


  }

  getAndSaveVendorName() {
    cy.get("select[formcontrolname='vendorId'] option:nth-child(2)").each((iterator, index, list) => {
      cy.writeFile("cypress/dataStored/vendorName.txt", iterator.text().trim() + ",", { flag: 'a+' })
      cy.log("vendorName:-" + iterator.text().trim() + "-")
    })
  }


  readVendorNameRemoveDuplicate() {
    cy.readFile("cypress/dataStored/vendorName.txt").then((fileContent) => {
      cy.log(fileContent)
      var rawFileContent = []
      rawFileContent = fileContent.split(",")
      cy.log("rawFileContent length" + rawFileContent.length)
      var unique = [];
      rawFileContent.forEach(element => {
        if (!unique.includes(element)) {
          unique.push(element);
        }
      });

      cy.log("unique length" + unique.length)
      for (var i = 0; i < unique.length - 1; i++) {
        cy.log("unique:-" + unique[i] + "-")
        cy.writeFile("cypress/dataStored/vendorNameUnique.txt", unique[i] + ",", { flag: 'a+' })
      }
    })
  }


  checkTextPaint(buttonCaption) {
    cy.get('input[placeholder="Invoice Number"]').invoke('attr', "readonly").then(ele => {
      cy.log("ele:-" + ele + "-")
      if (ele === "readonly") {
        cy.log('True')
        this.clickAtButton(buttonCaption);
        cy.wait(3000);
      } else {
        cy.log('false')
        this.typeEvent("[placeholder='Invoice Number']", "Paint-" + this.getDate());
        cy.wait(6000);
        this.clickAtButton(buttonCaption);
        cy.wait(3000);
      }
    })
  }



  checkTextDetail(buttonCaption) {
    cy.get('input[placeholder="Invoice Number"]').invoke('attr', "readonly").then(ele => {
      cy.log("ele:-" + ele + "-")
      if (ele === "readonly") {
        cy.log('True')
        this.clickAtButton(buttonCaption);
        cy.wait(3000);
      } else {
        cy.log('false')
        this.typeEvent("[placeholder='Invoice Number']", "Detail-" + this.getDate());
        cy.wait(6000);
        this.clickAtButton(buttonCaption);
        cy.wait(3000);
      }
    })
  }



  checkTextWheel(buttonCaption) {
    cy.get('input[placeholder="Invoice Number"]').invoke('attr', "readonly").then(ele => {
      cy.log("ele:-" + ele + "-")
      if (ele === "readonly") {
        cy.log('True')
        this.clickAtButton(buttonCaption);
        cy.wait(3000);
      } else {
        cy.log('false')
        this.typeEvent("[placeholder='Invoice Number']", "Wheel-" + this.getDate());
        cy.wait(6000);
        this.clickAtButton(buttonCaption);
        cy.wait(3000);
      }
    })
  }



  checkTextInterior(buttonCaption) {
    cy.get('input[placeholder="Invoice Number"]').invoke('attr', "readonly").then(ele => {
      cy.log("ele:-" + ele + "-")
      if (ele === "readonly") {
        cy.log('True')
        this.clickAtButton(buttonCaption);
        cy.wait(3000);
      } else {
        cy.log('false')
        this.typeEvent("[placeholder='Invoice Number']", "Interior-" + this.getDate());
        cy.wait(6000);
        this.clickAtButton(buttonCaption);
        cy.wait(3000);
      }
    })
  }





  checkTextDentRemoval(buttonCaption) {
    cy.get('input[placeholder="Invoice Number"]').invoke('attr', "readonly").then(ele => {
      cy.log("ele:-" + ele + "-")
      if (ele === "readonly") {
        cy.log('True')
        this.clickAtButton(buttonCaption);
        cy.wait(3000);
      } else {
        cy.log('false')
        cy.get('input[placeholder="Invoice Number"]').clear()
        this.typeEvent("[placeholder='Invoice Number']", "DR-" + this.getDate());
        cy.wait(6000);
        this.clickAtButton(buttonCaption);
        cy.wait(3000);
      }
    })
  }




}

//export default new genericFunction1();
module.exports = new genericFunction1();