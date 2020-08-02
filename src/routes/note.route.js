import express from 'express'
import Note from '../controllers/note.controller'
import User from '../controllers/user.controller'
import authMiddleware from '../middlewares/auth.middleware'

var router = express.Router()

router.use(authMiddleware)

router.post('/create', async (req, res, next) => {
  try {
    const { externalId, externalProvider } = req.user
    const { title, body, tags } = req.body
    const { id } = await Note.create({ title, body, tags })
    await User.addNote(externalId, externalProvider, id)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

router.get('/fetch-all', async (req, res, next) => {
  try {
    const { externalId, externalProvider } = req.user
    const { notes } = await User.findByExternal(externalId, externalProvider)
    const noteData = await Note.find(notes)
    res.json(noteData)
  } catch (error) {
    next(error)
  }
})

router.put('/delete', async (req, res, next) => {
  try {
    const { externalId, externalProvider } = req.user
    const { id } = req.body
    await Note.delete(id)
    await User.deleteNote(externalId, externalProvider, id)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

module.exports = router
