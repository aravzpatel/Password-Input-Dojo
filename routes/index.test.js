const request = require('supertest')
const app = require('../app')

describe('Index file', () => {
    it('should return a 200',async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toBe(200)
    })
});