import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import passport from 'passport'
import cors from 'cors'
import helmet from 'helmet'

import indexRouter from './routes/index'
import userRouter from './routes/user.route'
import authRouter from './routes/auth.route'
import noteRouter from './routes/note.route'

require('./services/userAuth')

const app = express()
app.use(cors())
app.use(helmet())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(passport.initialize())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use('/note', noteRouter)

app.use((req, res, next) => {
  next(createError(404))
})

app.use((err, req, res) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
