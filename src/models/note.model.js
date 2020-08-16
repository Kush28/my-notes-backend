import mongoose from 'mongoose'

// function atLeastOne(val) {
//   return val.length >= 1
// }

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    tags: {
      type: Array
      // required: true,
      // validate: [atLeastOne]
    }
  },
  {
    timestamps: true
  }
)

const Note = mongoose.model('Note', noteSchema)

export default Note
