import express from 'express'
import User from '../controllers/user.controller'
import verifyToken from '../services/googleOAuth'

var router = express.Router()

router.post('/login', async (req, res, next) => {
  try {
    
    const response = await User.create(req.body)
    res.send(response)
  } catch (error) {
    next(error)
  }
})

router.get('/findall', async (req, res, next) => {
  try {
    const response = await User.findAll()
    res.json(response)
  } catch (error) {
    next(error)
  }
})

module.exports = router
