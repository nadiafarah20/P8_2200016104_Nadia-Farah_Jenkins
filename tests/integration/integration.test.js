const request = require('supertest');
const app = require('../../app');  // Mengimpor aplikasi Express

describe('Integration Test: GET /', () => {
    it('should respond with Hello, World!', async () => {
        // Melakukan permintaan GET ke endpoint '/'
        const res = await request(app).get('/');
        
        // Memeriksa status code dari respons
        expect(res.statusCode).toBe(200);

        // Memeriksa teks dari respons
        expect(res.text).toBe('Hello, World!');
    });

    // Tes tambahan lainnya bisa Anda tambahkan di sini
    it('should return content type text/html', async () => {
        const res = await request(app).get('/');
        expect(res.headers['content-type']).toMatch(/text\/html/);
    });
});
