import models from '../models'

exports.create = ({ name, avatar }) => {
  const user = new models.User({
    name,
    avatar
  })
  return user.save()
}

exports.findAll = () => models.User.find()

exports.findOne = (userId, password) =>
  models.User.findOne({
    userId,
    password
  })

exports.update = () => {}

exports.delete = () => {}

