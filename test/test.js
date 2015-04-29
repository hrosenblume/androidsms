var q = require('q');
var should = require('chai').should();
var androidSMS = require('android-sms-node');
var createContact = q.denodeify(androidSMS.createContact);

describe('Testing createContact', function() {
	var name = 'Test Contact';
	var number = "+5162444385";

	it('properly calls the api', function() {
		createContact(name, number).then(callbackHandler, console.error);
	});
	it('creates a contact named ' + name + ' with number ' + number, function() {
		//help
	});
});

function callbackHandler(res){
  console.log(res);
}
