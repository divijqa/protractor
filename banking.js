describe("Test automation of banking app",function(){
	
	it("Customer login test",function(){
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		
		//expect 
		expect(browser.getTitle()).toContain("Protractor practice");
		
		element(by.buttonText("Customer Login")).click();
		browser.sleep("3000");
		element(by.model("custId")).click();
		element.all(by.css("#userSelect option")).then(function(items){
			//printing values from drop down list
			console.log("-------------printing values from dropdown list-------------");
			console.log("Total values in dropdown are : " +items.length);
			//expect(items.length).toBe("6");
			//expect(items[0].getText()).toBe('0');
			for(i=0; i<items.length; i++){
				items[i].getText().then(function(text){
					console.log(text);
				});
			}
			console.log("-------------printing Attributes from dropdown list-------------");
			for(i=0; i<items.length; i++){
				items[i].getAttribute("value").then(function(text){
					console.log(text);
				});
			}
			browser.sleep("2000");
			element(by.model("custId")).element(by.css("[value='2']")).click();
			browser.sleep("3000");
            element(by.buttonText("Login")).click();
            //expect
            expect(element(by.binding("user")).getText()).toEqual("Harry Potter");
            browser.sleep("2000");
            
		});
	});	
});