import express from 'express'
import User from '../controllers/user.controller'

var router = express.Router()

/* GET users listing. */
router.get('/create', async (req, res) => {
  try {
    const { response } = await User.create(req, res)
    req.send(response)
  }
  catch (error) {
    res.status(500).send({
      message: error.message
    })
  }
})

module.exports = router
