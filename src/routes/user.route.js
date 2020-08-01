import express from 'express'
import User from '../controllers/user.controller'
import authMiddleware from '../middlewares/auth.middleware'

var router = express.Router()

router.use(authMiddleware)

router.get('/auth', async (req, res, next) => {
  try {
    const { externalId, externalProvider } = req.user
    const response = await User.findByExternal(externalId, externalProvider)
    res.json(response)
  } catch (error) {
    next(error)
  }
})

module.exports = router
