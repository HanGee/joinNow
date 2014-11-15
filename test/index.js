
var request = require('supertest');
var app = require('./../app');

describe('GET /', function(){
	it('should be 200', function (done){
		request(app)
			.get('/')
			.expect(200)
			.end(function (err, res) {
				if (err) throw err;
				return done();
			});
	});
});

