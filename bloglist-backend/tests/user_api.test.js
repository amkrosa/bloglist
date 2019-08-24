const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')
const helper = require('../utils/test_helper')

const api = supertest(app)

describe('When there are many users...', ()=>{
  beforeEach(async ()=>{
    await helper.initDatabase()
  })

  describe('GET requests...', ()=>{
    test('users are returned as json', async () => {
      await api
        .get('/api/users')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })
  
    test('all users are returned', async () => {
      const response = await api.get('/api/users')
  
      expect(response.body.length).toBe(helper.initialBlogs.length)
    })
  
    test('contains specific user', async () => {
      const response = await api.get('/api/users')
      const contents = response.body.map(r => r.username)
  
      expect(contents).toContain('amkrosa')
    })
  })

  describe('POST requests...', ()=>{
    const newObject = {
      username: 'annamagdalenarosa',
      name: 'anusia',
      password: 'anusia123'
  
    }

    const newObjectNameOnly = {
      name: 'anuusiaa'
    }

    const newObjectShort = {
      username: 'as',
      name: 'anuusiaa',
      password: 'ds',
    }
  
    test('Correctly creates a new user', async ()=>{
      const usersStart = await helper.usersInDB()
  
      await api.post('/api/users')
        .send(newObject)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
  
      const usersEnd = await helper.usersInDB()
      const usernames = usersEnd.map( u => u.username)
  
      expect(usersEnd.length).toBe(usersStart.length+1)
      expect(usernames).toContain('amkrosa')
  
    })

    test('fail when \'username\' or \'password\' property is missing', async () => {
      const usersStart = await helper.usersInDB()
      await api.post('/api/users').send(newObjectNameOnly).expect(400)
      const usersEnd = await helper.usersInDB()
      expect(usersEnd.length).toEqual(usersStart.length)
    })
    test('fail when \'username\' or \'password\' property has less than 3 characters', async () => {
      const usersStart = await helper.usersInDB()
      await api.post('/api/users').send(newObjectShort).expect(400)
      const usersEnd = await helper.usersInDB()
      expect(usersEnd.length).toEqual(usersStart.length)
    })



  })

  afterAll(()=>{
    mongoose.connection.close()
  })
})

