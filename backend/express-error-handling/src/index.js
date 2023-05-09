const express = require("express")
require('express-async-errors');
const cookieParser = require("cookie-parser")
const yup = require("yup")

const app = express()

app.use(express.json())
app.use(cookieParser())

class ValidationError extends Error {
  constructor(message, content){
    super(message)
    this.name = "Validation Error"
    this.content = content
    this.status = 400
  }
}

class AuthenticationError extends Error {
  constructor(message){
    super(message)
    this.name = "Authentication Error"
    this.status = 403
  }
}

function validateMiddleware(schema){
  return async (req,res,next) => {
    try{
      const { body } = req
      await schema.validate(body, {abortEarly:false})
      return next()
    }catch({errors}){
      next(new ValidationError("Please verify the input", errors))
    }
  }
}

function authMiddleware(){
  return (req, res, next) => {
    const session = req.cookies.session
    console.log(session)
    if(!session){
      return next(new AuthenticationError("Please login"))
    }
    return next()
  }
}

function errorMiddleware(error, req, res, next){
  if(error instanceof ValidationError){
    return res.status(error.status).send({
      error: true,
      message: error.message,
      content: error.content
    })
  }

  return res.status(error.status ?? 500).send({
    error: true,
    message: error.message ?? "Something went wrong"
  })
}

const userSchema = yup.object({
  name: yup.string().min(5).required(),
  age: yup.number().min(18).required(),
})

app.post("/",validateMiddleware(userSchema), (req,res) => {
  res.send("hello")
})

app.get("/login", (req, res) => {
  res.cookie("session", true, {httpOnly: true})
  res.send("ok")
})

app.get("/todos", authMiddleware(), async(req, res) => {
  throw new AuthenticationError("User does not have todos")

  res.send({
    todos: ['bailar', 'cocinar', 'comer']
  })
})

app.use(errorMiddleware)

app.listen(3000, () => console.log("Server listenning at 3000"))
