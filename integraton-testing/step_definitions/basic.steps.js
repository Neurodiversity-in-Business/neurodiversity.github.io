// Import the cucumber operators we need
const { Before, Given, When, Then, After } = require("@cucumber/cucumber");
const { HomePage } = require('../pages/home.po');

var chai = require("chai");
var expect = chai.expect;

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var expect = chai.expect;

Before(function (scenario, callback) {
  this.homepage = new HomePage();

  callback();
});

Given("I go to {string}", function (string) {
  this.homepage.navigateToHome();
  //return ;

  //expect(browser).to.eventually.equal("http://localhost:8080");
});
Then("click on the Home Button", function () {
  
  browser.waitForElementVisible('#homeContent').click('#homeContent').screenshot().end();
  //expect(" ").to.be.equal("");
});
