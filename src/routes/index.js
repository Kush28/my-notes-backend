var express = require('express')

var router = express.Router()

router.get('/ping', (req, res) => {
  res.render('ping', { title: 'Express' })
})

router.post('/pong', (req, res) => {
  res.render('pong', { title: 'Express' })
})

module.exports = router
