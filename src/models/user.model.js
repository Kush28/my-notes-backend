import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    externalId: {
      type: String,
      required: true,
      unique: true
    },
    externalProvider: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)

export default User
