var q = require('q');
var should = require('chai').should();
var androidSMS = require('android-sms-node');
var assert = require("assert");
var createContact = q.denodeify(androidSMS.createContact);

var sample_contact = {
	name: 'Test Contact',
	number: '+94812394832',
	message: 'This is a sample message.'
};

describe('Testing createContact', function() {
	this.timeout(3000);

<<<<<<< HEAD
	it('properly posts to the api', function(done) {
		androidSMS.createContact(sample_contact.name, sample_contact.number, function(val, err) {
			if (err) throw(err);
			var result = JSON.parse(val[1]);
		  	try {
		  		assert.notEqual(result, null);
		  		done();
		  	} catch(e) {
		  		console.log(result.errors); 
		  		done(e); 
		  	}
		});
=======
	it('properly calls the api', function() {
		createContact(name, number).then(callbackHandler, console.error);
	});
	it('creates a contact named ' + name + ' with number ' + number, function() {
		//help
>>>>>>> 2f6306e36f644d36b3bf61463d361f025b7af835
	});
});

function callbackHandler(res){
  console.log(res);
}
