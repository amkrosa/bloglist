const Blog = require('../models/blog');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const initialBlogs = [
  {
    _id: '5d518a85b3f4af1ed8185361',
    title: 'Testing Api Backend',
    author: 'Anna Krasowska',
    url: 'http://someurl.com/',
    content:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    likes: 10,
    user: '5d518a559ba92ea357325a9b',
  },
  {
    title: 'Being great girlfriend',
    author: 'Aurelia Nowicka',
    content:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    url: 'http://someurl.com/',
    likes: 999,
  },
  {
    title: 'Test test test',
    author: 'Anna Krasowska',
    content:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    url: 'http://someurl.com/',
    likes: 7,
  },
];

const initialUsers = [
  {
    _id: '5d518a559ba92ea357325a9b',
    username: 'amkrosa',
    name: 'anusia',
    password: 'anusia123',
    notes: ['5d518a85b3f4af1ed8185361'],
  },
  {
    username: 'username2',
    name: 'xxxlulxxx',
    password: 'passw',
  },
  {
    username: 'userrrrrrr',
    name: 'somenameofanuser',
    password: 'word',
  },
];

const initDatabase = async () => {
  await Blog.deleteMany({});
  await User.deleteMany({});

  for (const blog of initialBlogs) {
    let blogObject = new Blog(blog);
    await blogObject.save();
  }
  const users = await getInitialHashedUsers();
  for (const user of users) {
    let userObject = new User(user);
    await userObject.save();
  }
};

const getInitialHashedUsers = async () =>
  await Promise.all(
    initialUsers.map(async user => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const { password, ...newObject } = user;
      return { ...newObject, passwordHash: hashedPassword };
    }),
  );

const nonExistingId = async () => {
  const blog = new Blog({
    title: 'asd',
    author: 'Annfga Krasowska',
    url: 'http://somdseurl.com/',
    likes: 10,
  });
  await blog.save();
  await blog.remove();

  return blog._id.toString();
};

const blogsInDB = async () => {
  const blogs = await Blog.find({});
  return blogs.map(blog => blog.toJSON());
};
const usersInDB = async () => {
  const users = await User.find({});
  return users.map(user => user.toJSON());
};

module.exports = {
  initialBlogs,
  initialUsers,
  nonExistingId,
  blogsInDB,
  usersInDB,
  getInitialHashedUsers,
  initDatabase,
};
