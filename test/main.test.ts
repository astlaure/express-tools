import express from 'express';
import { Controller, HttpError, errorHandler } from '../src/main';
import request from 'supertest';

describe('Main Test Suite', () => {
  const app = express();

  beforeAll(() => {
    const controller = new Controller();

    controller.all('/all', async (req, res) => {
      res.sendStatus(200);
    })

    controller.get('/', async (req, res) => {
      res.sendStatus(200);
    })

    controller.post('/', async (req, res) => {
      res.sendStatus(200);
    })

    controller.put('/', async (req, res) => {
      res.sendStatus(200);
    })

    controller.patch('/', async (req, res) => {
      res.sendStatus(200);
    })

    controller.delete('/', async (req, res) => {
      res.sendStatus(200);
    })

    controller.get('/error', async (req, res) => {
      throw new HttpError(500, "Custom Error");
    })

    app.use(controller.router);
    app.use(errorHandler);
  })

  test('should answer on get', async () => {
    const response = await request(app)
      .get('/');

    expect(response.status).toBe(200);
  })

  test('should answer on post', async () => {
    const response = await request(app)
      .post('/');

    expect(response.status).toBe(200);
  })

  test('should answer on put', async () => {
    const response = await request(app)
      .put('/');

    expect(response.status).toBe(200);
  })

  test('should answer on patch', async () => {
    const response = await request(app)
      .patch('/');

    expect(response.status).toBe(200);
  })

  test('should answer on delete', async () => {
    const response = await request(app)
      .delete('/');

    expect(response.status).toBe(200);
  })

  test('should answer on all', async () => {
    const response = await request(app)
      .get('/all');

    expect(response.status).toBe(200);
  })

  test('should gracefully return an error', async () => {
    const response = await request(app)
      .get('/error');

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Custom Error');
  })
})
