describe('validating the calculator App', function () {
    //Expect to be & not to be.
    var expected_text;
    //expect equal ,to match & not to equal
    var title;
    beforeEach(function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        title = browser.getTitle();
        element(by.model("first")).sendKeys("7");
        element(by.model("second")).sendKeys("7");
        element(by.buttonText("Go!")).click();
        expected_text = element(by.binding("latest")).getText();
    });
    afterEach(function () {
        browser.sleep("3000");
        console.log("after it block");
    });
    it('validate exact title', function () {
        title.then(function (text) {
            console.log(text);
            expect(title).toEqual("Protractor practice website - Calculator");
        })
    });
    it('validate titile should not match', function () {
        title.then(function (text) {
            console.log(text);
            expect(title).not.toEqual("Protractor practice website - calculator");
        })
    });
    it('validate partial title match', function () {
        title.then(function (text) {
            console.log(text);
            expect(title).toMatch("practice");
        })
    });
    it('validate 7+7=14', function () {
        expected_text.then(function (text) {
            console.log("Result is : "+text);
            expect(parseInt(text)).toBe(14);
        })
    });
    it('validate 7+7!=10', function () {
        expected_text.then(function (text) {
            console.log("Result is : "+text);
            expect(parseInt(text)).not.toBe(10);
        })
    });
    it('validate 7+7=13', function () {
        expected_text.then(function (text) {
            console.log("Result is : "+text);
            expect(parseInt(text)).toBe(13);
        })
    })
});