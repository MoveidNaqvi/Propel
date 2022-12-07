const request = require('supertest')
const app = require('../app')

describe('GET /contacts', () => {
  describe('given the endpoint is hit', () => {
    it('should respond with a status code of 200 ', async () => {
      const response = await request(app).get('/contacts')
      expect(response.statusCode).toBe(200)
    });
    it('should respond with an array ', async () => {
      const response = await request(app).get('/contacts')
      expect(response.body).toBeInstanceOf(Array)
    });
  })
})


describe('POST /contacts', () => {
  describe('given a complete object is sent', () => {
    it('should respond with a status code of 201(created) and the created object ', async () => {
      const testObject = {
        first_name: 'Jest',
        last_name: 'Test',
        phone: '99999999999',
        email: 'jestTest@gmail.com'
      }
      const response = await request(app).post('/contacts').send(testObject)
      expect(response.statusCode).toBe(201)
      expect(response.body).toEqual(
        expect.objectContaining(testObject)
      )
    });
  })
  describe('given an object with missing properties is sent', () => {
    it('should respond with a stauts code of 400 ', async () => {
      const missingObject = {
        first_name: 'Test',
        last_name: '',
        phone: '07452876742',
        email: ''
      }
      const response = await request(app).post('/contacts').send(missingObject)
      expect(response.statusCode).toBe(400)
    });
  });
})


describe('PATCH /contacts/id', () => {
  describe('given the contact object with the id provided is found', () => {
    it('should update the object with provided data and return a 201 status code ', async () => {
      const updatedObject = {
        first_name: 'Updated Jest',
        last_name: 'Updated Test',
        phone: '99999999999',
        email: 'updatedJestTest@gmail.com'
      }
      const response = await request(app).patch('/contacts/1').send(updatedObject)
      expect(response.body).toEqual(
        expect.objectContaining(updatedObject)
      )
      expect(response.statusCode).toBe(201)
    });
  });
  describe('given no object is found with given id', () => {
    it('should return a status code of 402 ', async () => {
      const response = await request(app).patch('/contacts/955').send({
        anyData: '404 expected'
      })
      expect(response.statusCode).toBe(404)
    });
  }); 
});

// describe('DELETE /contacts/id', () => {
//   describe('given the contact object with the id provided is found', () => {
//     it('should delete the object and respond with a 200', async () => {
//       const response = await request(app).delete('/contacts/1')
//       expect(response.statusCode).toBe(200)
//     });
//   });
//   describe('given no object is found with given id', () => {
//     it('should return a status code of 402 ', async () => {
//       const response = await request(app).delete('/contacts/955')
//       expect(response.statusCode).toBe(404)
//     });
//   }); 
// });