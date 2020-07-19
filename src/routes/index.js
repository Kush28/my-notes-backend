var express = require('express')
var router = express.Router()

router.get('/ping', function (req, res, next) {
  res.render('ping', { title: 'Express' })
})

router.post('/pong', function(req, res, next){
  console.log(req.body)
  res.render('pong', { title: 'Express' })
})

module.exports = router
