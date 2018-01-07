/**
 * http://usejsdoc.org/
 */

// spec.js
describe('Protractor Demo App', function() {
	//var os = require('os'); os.tmpDir = os.tmpdir;
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});