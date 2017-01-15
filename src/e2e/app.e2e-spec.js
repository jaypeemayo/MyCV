"use strict";
var protractor_1 = require("protractor");
describe('Remit and Budget E2E Test', function () {
    var expectedMsg = 'Remit and Budget';
    beforeEach(function () {
        protractor_1.browser.get('');
    });
    // it('should display: ' + expectedMsg, function () {
    //   expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
    // });
    it('should display title: ' + expectedMsg, function () {
        expect(protractor_1.browser.getTitle()).toEqual('Remit and Budget');
    });
    it('should display title: ' + expectedMsg, function () {
        var userName = 'oyams90';
        var passWord = '123456';
        var username = protractor_1.element.all(protractor_1.by.css('input')).get(0);
        username.clear();
        username.sendKeys(userName);
        var password = protractor_1.element.all(protractor_1.by.css('input')).get(1);
        password.clear();
        password.sendKeys(passWord);
        username.getOuterHtml().then(function (o) {
            console.log(o);
            expect(o).toContain(userName);
        });
        password.getOuterHtml().then(function (o) {
            console.log(o);
            expect(o).toContain(passWord);
        });
        //var button = element(by.css('[routerLink=/dashboard]'));
        var button = protractor_1.element(protractor_1.by.css('button'));
        button.click();
        protractor_1.browser.waitForAngular();
        expect(protractor_1.browser.getCurrentUrl()).toContain('/dashboard');
        protractor_1.browser.getCurrentUrl().then(function (o) { return console.log(o); });
        protractor_1.element.all(protractor_1.by.css('button')).get(1).click();
        expect(protractor_1.browser.getCurrentUrl()).toContain('/transaction');
        protractor_1.browser.getCurrentUrl().then(function (o) { return console.log(o); });
        protractor_1.element(protractor_1.by.css('.glyphicon-plus')).click();
        protractor_1.browser.waitForAngular();
        expect(protractor_1.browser.getCurrentUrl()).toContain('/register-transaction');
        protractor_1.browser.getCurrentUrl().then(function (o) { return console.log(o); });
        protractor_1.element(protractor_1.by.name('action')).sendKeys('Remittance');
        protractor_1.element(protractor_1.by.name('amount')).sendKeys('10');
        protractor_1.element(protractor_1.by.name('month')).sendKeys('12/15/2016');
        protractor_1.element(protractor_1.by.name('description')).sendKeys('this is a description');
        protractor_1.element(protractor_1.by.css('[type="submit"]')).click();
        protractor_1.browser.switchTo().alert().accept();
        protractor_1.browser.sleep(5000);
    });
});
//# sourceMappingURL=app.e2e-spec.js.map