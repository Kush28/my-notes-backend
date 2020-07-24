import express from 'express'
import passport from 'passport'

const router = express.Router()

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.render('loggedin', { title: 'My Notes' })
})

module.exports = router
