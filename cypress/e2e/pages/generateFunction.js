class genericFunction {
    a=0;
    get() {
        console.log("Inside get ",this.a);
        cy.wait(5000);
        return this.a;
    }
    count = 0;
    set(b) {
        this.a = b;
        console.log("Inside set",this.a);
        //return b;
    }
    getBodyLength() {
        cy.get('body').then((length)=> {
            this.set(length.length);
        })
    return  this.get();    
    }
}

module.exports = new genericFunction();