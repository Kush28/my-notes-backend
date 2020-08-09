import express from 'express'
import passport from 'passport'
import { generateAccessToken } from '../services/jwt'

const router = express.Router()

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get('/google/redirect', passport.authenticate('google'), (req, res, next) => {
  try {
    const { externalId, externalProvider } = req.user
    const { accessToken } = generateAccessToken({ externalId, externalProvider })
    res.set('Content-Security-Policy', "")
    res.render('loggedin', { appName: 'My Notes', title: accessToken })
  } catch (error) {
    next(error)
  }
})

module.exports = router
