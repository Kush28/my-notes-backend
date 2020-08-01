import mongoose from 'mongoose'

import User from './user.model'
import Note from './note.model'

const connectDb = () => mongoose.connect(
  'mongodb+srv://kushal:w9Zp1hXqskIQ3B84@cluster0-p1sez.mongodb.net/bongo_rongo?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
)

const models = { User, Note }

export { connectDb }

export default models
