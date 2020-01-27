const loginRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

loginRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body;
    const user = await User.findOne({
      username: body.username
    });
    const passwordCorrect =
      user === null
        ? false
        : await bcrypt.compare(body.password, user.passwordHash);

    if (!(user && passwordCorrect)) {
      return response
        .status(401)
        .json({
          error: 'invalid username or password'
        })
        .end();
    }

    const userForToken = {
      username: user.username,
      id: user._id
    };

    const token = jwt.sign(userForToken, process.env.SECRET);
    response.status(200).send({
      token,
      id: user._id,
      username: user.username,
      name: user.name
    });
  } catch (e) {
    next(e);
  }
});

module.exports = loginRouter;
