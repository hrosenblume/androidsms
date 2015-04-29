//Module definitions
var q = require('q');
var request = q.denodeify(require('request'));

//Variable definitions
var email = process.env.SMS_GATEWAY_EMAIL;
var password = process.env.SMS_GATEWAY_PASSWORD;
var BASEURL = "https://smsgateway.me";

//API function definitions
module.exports = {
	createContact: function(name, number, callback) {
		var params = {'name': name, 'number': number};
		make_request('/api/v3/contacts/create', 'POST', params).then(callback);		
	},
	getContacts: function(callback) {
		var params = {'page': 1}; //default value
		make_request('/api/v3/contacts', 'GET', params).then(callback);
	},
	getContact: function(id, callback) {
		make_request('/api/v3/contacts/view/'+id, 'GET');
	},
	getDevices: function(callback) {
		var params = {'page': 1}; //default value
		make_request('/api/v3/devices', 'GET', params).then(callback);
	},
	getDevice: function(id, callback) {
		make_request('/api/v3/view' + id, 'GET').then(callback);
	},
	getMessages: function(callback) {
		var params = {'page': 1}; //default value
		make_request('/api/v3/messages', 'GET', params).then(callback);
	},
	getMessage: function(id, callback) {
		make_request('/api/v3/messages/view/' + id, 'GET').then(callback);
	},
	sendMessageToNumber: function(to, message, device, options, callback) {
		var params = {'contact': to, 'message': message, 'device': device};
		for (var option in options) { params[option] = options[option]; }
		make_request('/api/v3/messages/send', 'POST', params).then(callback);
	},
	sendMessageToManyNumbers: function(to, message, device, options, callback) {
		var params = {'contact': to, 'message': message, 'device': device};
		for (var option in options) { params[option] = options[option]; }
		make_request('/api/v3/messages/send', 'POST', params).then(callback);
	},
	sendMessageToContact: function(to, message, device, options, callback) {
		var params = {'contact':to, 'message':message, 'device':device};
		for (var option in options) { params[option] = options[option]; }
		make_request('/api/v3/messages/send', 'POST', params).then(callback);
	},
	sendMessageToManyContacts: function(to, message, device, options, callback) {
		var params = {'contact':to, 'message':message, 'device':device};
		for (var option in options) { params[option] = options[option]; }
		make_request('/api/v3/messages/send', 'POST', params).then(callback);
	},
	sendManyMessages: function(data, callback) {
		var params = {'data': data};
		make_request('/api/v3/messages/send', 'POST', params).then(callback);
	}
};

function make_request(url, method, fields) {
	url = BASEURL + url;

	method = (method == 'POST') ? 'POST' : 'GET';

	fields['email'] = email;
	fields['password'] = password;

	return request({
		"rejectUnauthorized": false,
	    url: url,
	    qs: fields,
	    method: method
	});
}