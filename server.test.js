const request = require('supertest');
const app = require('./server'); // Import the Express app

describe('POST /', () => {
    it('should return the content from the body', (done) => {
        const testContent = { content: 'Hello, world!' };
        request(app)
            .post('/')
            .send(testContent)
            .expect(200)
            .expect({ content: 'Hello, world!' }, done);
    });

    it('should return 400 for missing content field', (done) => {
        request(app)
            .post('/')
            .send({})
            .expect(400, done);
    });
});