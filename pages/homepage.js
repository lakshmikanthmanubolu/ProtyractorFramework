const { browser } = require("protractor");

let homepage = function(){

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton1 = element(by.id('gobutton'));
    
    this.getting = function(url){
        browser.get(url);
    };
    
    this.enterfirst_Number = function(firstNo){
        firstNumber_input.sendKeys(firstNo);
    };

    this.entersecond_Number = function(secondNo){
        secondNumber_input.sendKeys(secondNo);
    };

    this.clickGo = function(){
        goButton1.click();
    };

    this.verifyResults = function(resulting){
        let results = element(by.className('ng-binding', resulting));
        expect(results.getText()).toEqual(resulting);
    };




};

module.exports = new homepage();