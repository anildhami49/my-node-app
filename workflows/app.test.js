const request = require('supertest');
const app = require('./app');
test('should return hello workd' ,async () => {
	const response = aqait request(app).get('/');
	expect(response.text).toBe('hellow,World');
});


