let homepage = require('../pages/homepage');

describe('to fail the test', function(){

    it('add two numbers using pom', function(){

        homepage.getting('http://juliemr.github.io/protractor-demo/');
        homepage.enterfirst_Number('6');
        homepage.entersecond_Number('3');
        homepage.clickGo();
        homepage.verifyResults('6');
        
    });
});