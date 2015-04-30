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
	});
});
