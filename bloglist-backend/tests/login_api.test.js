const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const User = require('../models/user');
const helper = require('../utils/test_helper');

const api = supertest(app);

describe('Login with token authentication...', () => {
  beforeEach(async () => {
    await User.deleteMany({});
    await helper.initDatabase();
  });

  const correctUser = {
    username: 'amkrosa',
    password: 'anusia123',
  };
  const incorrectUser = {
    username: 'incorrect',
    password: 'anusia123',
  };

  test('With correct request data, token is created.', async () => {
    const response = await api
      .post('/api/login')
      .send(correctUser)
      .expect(200);
    const body = response.body;

    expect(body.username).toEqual('amkrosa');
    expect(body.token).toBeTruthy();
  });

  test('With incorrect request data, error is thrown.', async () => {
    const response = await api
      .post('/api/login')
      .send(incorrectUser)
      .expect(401);
    const body = response.body;

    expect(body.username).not.toEqual('incorrect');
    expect(body.token).toBeFalsy();
  });

  afterAll(() => {
    mongoose.connection.close();
  });
});
