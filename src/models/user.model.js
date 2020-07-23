import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String
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
