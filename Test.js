describe("Test entering into a inputbox",function(){
	it("executing input box text",function(){
		
		browser.get("https://www.angularjs.org");
		browser.sleep("3000")
		element(by.model("yourName")).sendKeys("Divij");
		browser.sleep("3000")
		element(by.binding("yourName")).getText().then(function(text){
			 
			console.log(text);
		});
	});
		
});