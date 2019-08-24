const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Blog = require('../models/blog');
const helper = require('../utils/test_helper');

const api = supertest(app);

describe('general api tests', () => {
  let token;

  beforeAll(async () => {
    const response = await api.post('/api/login').send({
      username: 'amkrosa',
      password: 'anusia123',
    });
    token = response.body.token;
  });

  beforeEach(async () => {
    await helper.initDatabase();
  });

  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test("unique identifier property of the blog posts is named 'id'", async () => {
    const response = await api.get('/api/blogs/');
    expect(response.body[0]).toHaveProperty('id');
  });

  test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs');

    expect(response.body.length).toBe(helper.initialBlogs.length);
  });

  test('contains specific blog', async () => {
    const response = await api.get('/api/blogs');
    const contents = response.body.map(r => r.title);

    expect(contents).toContain('Testing Api Backend');
  });

  describe('POST request tests', () => {
    const newObject = {
      title: 'POST tests',
      author: 'Unknown',
      url: 'http://someurl.com/',
      likes: 454,
      content: 'asdfdsf',
    };
    const newObjectWithoutLikes = {
      title: 'Likes are not welcome here',
      author: 'Unknown',
      url: 'http://someurl.com/',
    };
    const newObjectWithoutUrlTitle = {
      author: 'Unknown',
    };

    test('Only authorized users can create a blog post', async () => {
      await api
        .post('/api/blogs')
        .send(newObject)
        .expect(401);
      const afterBlogs = await helper.blogsInDB();
      expect(afterBlogs.length).toBe(helper.initialBlogs.length);
    });

    test('POST creates a new blog post using provided data', async () => {
      await api
        .post('/api/blogs')
        .send(newObject)
        .set('Authorization', `Bearer ${token}`)
        .expect('Content-Type', /json/)
        .expect(201);

      const response = await api.get('/api/blogs');
      expect(response.body.length).toBe(helper.initialBlogs.length + 1);
      expect(response.body[response.body.length - 1].title).toEqual(
        'POST tests',
      );
    });

    test("fail when 'likes' property is missing", async () => {
      await api
        .post('/api/blogs')
        .send(newObjectWithoutLikes)
        .set('Authorization', `Bearer ${token}`)
        .expect(201);
      const response = await api.get('/api/blogs');
      expect(response.body[response.body.length - 1].likes).toEqual(0);
    });

    test("fail when 'title' and 'url' properties are missing", async () => {
      await api
        .post('/api/blogs')
        .send(newObjectWithoutUrlTitle)
        .set('Authorization', `Bearer ${token}`)
        .expect(400);
    });
  });
  describe('DELETE request tests', () => {
    test('DELETE removes specified blog post provided authorization', async () => {
      const responseBeforeDeletion = await helper.blogsInDB();
      const blogToDelete = responseBeforeDeletion[0];
      await api
        .del('/api/blogs/' + blogToDelete.id)
        .set('Authorization', `Bearer ${token}`)
        .expect(204);
      const responseAfterDeletion = await helper.blogsInDB();

      expect(responseAfterDeletion.length).toEqual(
        helper.initialBlogs.length - 1,
      );
      expect(responseAfterDeletion[0]).not.toContain(blogToDelete);
    });
  });
  describe('PUT request tests', () => {
    const newObject = {
      title: 'POST tests',
      author: 'Unknown',
      url: 'http://someurl.com/',
      likes: 454,
    };
    const newObjectWithLikesOnly = {
      likes: 123456,
    };

    const putTest = async data => {
      const blogsBeforeUpdate = await helper.blogsInDB();
      await api
        .put('/api/blogs/' + blogsBeforeUpdate[0].id)
        .send(data)
        .expect(200);
      const blogsAfterUpdate = await helper.blogsInDB();
      expect(blogsAfterUpdate.length).toEqual(helper.initialBlogs.length);
      expect(blogsAfterUpdate[0]).toMatchObject(data);
    };

    test('PUT updates whole blog post', async () => {
      await putTest(newObject);
    });

    test('PUT updates single value within blog post', async () => {
      await putTest(newObjectWithLikesOnly);
    });
  });

  afterAll(() => {
    mongoose.connection.close();
  });
});