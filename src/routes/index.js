import express from 'express'

var router = express.Router()

router.get('/ping', (req, res) => {
  res.render('ping', { title: 'My Notes' })
})

router.post('/pong', (req, res) => {
  res.render('pong', { title: 'My Notes' })
})

module.exports = router
