describe('validating the calculator App', function () {
    beforeEach(function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
    });
    afterEach(function () {
        browser.sleep("3000");
        console.log("after it block")
    });
    it('validate 1+3=4', function () {
           element(by.model("first")).sendKeys("1");
           element(by.model("second")).sendKeys("3");
           element(by.buttonText("Go!")).click();
           element(by.binding("latest")).getText().then(function (text) {
               console.log("Result is : "+text)
           })
    });
    it('validate 2+2=4', function () {
        element(by.model("first")).sendKeys("2");
        element(by.model("second")).sendKeys("2");
        element(by.buttonText("Go!")).click();
        element(by.binding("latest")).getText().then(function (text) {
            console.log("Result is : "+text)
        })
    });
    it('validate 2+4=6', function () {
        element(by.model("first")).sendKeys("2");
        element(by.model("second")).sendKeys("4");
        element(by.buttonText("Go!")).click();
        element(by.binding("latest")).getText().then(function (text) {
            console.log("Result is : "+text)
        })
    });
    it('validate 7+7=14', function () {
        element(by.model("first")).sendKeys("7");
        element(by.model("second")).sendKeys("7");
        element(by.buttonText("Go!")).click();
        element(by.binding("latest")).getText().then(function (text) {
            console.log("Result is : "+text)
        })
    })
});