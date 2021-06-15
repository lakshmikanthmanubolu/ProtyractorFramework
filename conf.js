const { browser } = require('protractor');

/*exports.config = {
    //The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

 
  //Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
    specs: ['spec.js']

  };*/

  var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

  var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html'
  });

exports.config={

  specs: [
    'tests_POM/super_Calculator.js',
    'tests_POM/substraction_test.js'
    //'./functionalTests/spec.js',
    //'./nonangularTests.js'
    //'./Handlingdropdown.js',
    //'checkboxes.js'
    //'./functionalTests/spec1.js'
    //'./spec2.js'
  ],
    capabilities: {
        browserName: 'chrome',
        'sharedTestfiles': true,
        'maxinstances': 2,
        chromeOptions: {
            args: ["--incognito", "--start-maximized"]
        }
    },
    loglevel: 'ERROR' | 'WARN' | 'INFO' | 'DEBUG',
    directConnect: true,
    //baseUrl: 'https://mysupport-stg.netapp.com/site/',
    //baseUrl: 'https://ndp-zok-stage-8.npc-us-west-dc61.ncloud.netapp.com/site/',
    //baseUrl: 'https://mysupport-stg.netapp.com/site/',
    
    
    framework: 'jasmine2',
    onPrepare: function() {
      jasmine.getEnv().addReporter(reporter);
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
      }));
    },

    // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
      
      };