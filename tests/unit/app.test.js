const request = require('supertest');
const app = require('../../app'); // pastikan path sesuai dengan file app.js Anda

describe('GET /', () => {
    it('responds with Hello, World!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello, World!');
    });
});
