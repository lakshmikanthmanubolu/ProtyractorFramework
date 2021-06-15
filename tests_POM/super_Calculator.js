let homepage = require('../pages/homepage');

describe('calculator pom', function(){

    it('add two numbers using pom', function(){

        homepage.getting('http://juliemr.github.io/protractor-demo/');
        homepage.enterfirst_Number('5');
        homepage.entersecond_Number('3');
        homepage.clickGo();
        homepage.verifyResults('8');
        
    });
});