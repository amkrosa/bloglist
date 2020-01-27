const config = require('./utils/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const blogsRouter = require('./controllers/bloglist/blogs');
const usersRouter = require('./controllers/bloglist/users');
const loginRouter = require('./controllers/bloglist/login');

const middleware = require('./utils/middleware');

const mongoUrl = config.MONGODB_URI;

mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch(error => {
    console.log('error connection to MongoDB:', error.message);
  });

app.use(cors());
app.use(bodyParser.json());

app.use(middleware.tokenExtractor);

//blog-list api
app.use('/bloglist/api/blogs', blogsRouter);
app.use('/bloglist/api/users', usersRouter);
app.use('/bloglist/api/login', loginRouter);

//app.use(express.static(path.join(__dirname, 'client//bloglist-build/static')));
app.use(express.static('client/bloglist-build'));
app.use(express.static(path.join(__dirname, 'client/bloglist-build')));

app.use(express.static('client/personalsite-build'));
app.use(express.static(path.join(__dirname, 'client/personalsite-build')));

/*app.use(
  '/static',
  express.static(path.join(__dirname, 'client//personalsite-build/static')),
);*/

/*app.get('/bloglist', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, 'client//bloglist-build/'),
  });
});*/

app.get('/bloglist*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/bloglist-build', 'index.html'));
});
app.get('/', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, 'client/personalsite-build', 'index.html'),
  );
});
/*app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, 'client//personalsite-build/'),
  });
});*/

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
