const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')

usersRouter.get('/', async (request, response, next) => {
  try{
    const users = await User.find({}).populate('blogs')
    response.json(users.map(u => u.toJSON()))
  }catch(e){
    next(e)
  }
})

usersRouter.get('/:id', async (request, response, next) => {
  try{
    const requestedUser = await User.findById(request.params.id)
    requestedUser ? response.json(requestedUser.toJSON()) : response.status(404).end()
  }catch(e){
    next(e)
  }
})

usersRouter.post('/', async (request, response, next) => {
  try{
    const body = request.body
    if (!body.username || !body.password){
      return response.status(400).end()
    }else if (body.username.length<3 || body.password.length<3){
      return response.status(400).end()
    }
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    })

    const savedUser = await user.save()
    response.status(201).json(savedUser).end()

  }catch(e){
    next(e)
  }

})

module.exports = usersRouter