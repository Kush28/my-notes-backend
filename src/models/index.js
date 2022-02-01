import mongoose from 'mongoose'

import User from './user.model'
import Note from './note.model'

const connectDb = () => mongoose.connect(
  `mongodb+srv://kushal:oZ16RfMz2Hdt8WD2@cluster0-p1sez.mongodb.net/bongo_rongo?retryWrites=true&w=majority`,
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
