import * as XLSX from "xlsx";
export default class BasicFunction {
    
        
    checkAtagActive() {
        let statusCode = []; 
        let urlList = [];
        cy.log("Type of num is ",typeof numberOfUrl)
        for(let i = 1 ; i <=parseInt(numberOfUrl) ; i++) {
            //cy.xpath("//a").eq(i).click({force:true});
            cy.xpath("//a").eq(i).then((response)=>{   // if the button is in an '<a>' tag, you could grab something like this
            const newUrl =  Cypress.$(response).attr('href'); 
            //cy.visit(newUrl);
            //cy.log('Current URL is: ' + url)
            //let a = await promisify(cy.get1(url));
            urlList.push(newUrl)
            console.log(newUrl)
            if(newUrl !== undefined) {
                cy.request({
                    method : 'GET',
                    url: newUrl,
                    failOnStatusCode: false
                }).then((respons)=>{
                    statusCode.push(respons.status);
                    //cy.visit('/');                    
                }).then(() =>{
                    console.log("Tot response is ",statusCode);
                    console.log("Url are ",urlList)
                })
            }
            //console.log("a is ",a)
        })
    }
    }


    excelSheetWrite(){
        //const workBook = XLSX.readFile('C:\\Users\\pragya.kumar\\Downloads\\priceHistory.xlsx');
        //const jsonData = XLSX.utils.sheet_to_json(workBook.Sheets.Sheet1);
        const reader = require('xlsx')
        cy.readFile('C:\\Users\\pragya.kumar\\Downloads\\priceHist.xlsx')
        .then((data) => {
            
            //if(jsonData.Country === 'Australia')
            //   console.log("Success")
            console.log(data);  
        });
    }       
    wrr() {
        cy.readFile('C:\\Users\\pragya.kumar\\Downloads\\priceHistory.ods')
        .then( (jsonData) =>{ 
            var workbook = XLSX.read(jsonData);
            const sheets = workbook.Sheets;
            // Printing data
            let data = XLSX.utils.sheet_to_json(sheets);
            console.log(workbook);
            //let array = Object.keys(data);
            //array.forEach((value) =>{
            //    console.log(value.toString());
            //})
        })
    }
}

