const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const tokenExtractor = (request, response, next) => {  
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  }
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  if (error.name === 'ValidationError') {
    return response.status(400).send({ error: 'Person validation failed' })
  }

  next(error)
}


module.exports = {
  unknownEndpoint,
  errorHandler,
  tokenExtractor,
}