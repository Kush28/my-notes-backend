import express from 'express'
import passport from 'passport'

require('../services/userAuth')

const router = express.Router()

router.use(passport.initialize())

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('In callback url')
})

module.exports = router
