import models from '../models'

exports.create = () => {
  const user = new models.User({
    test: 'kushal'
  })
  return user.save()
}

exports.findAll = () => models.user.findAll()

exports.findOne = () => {}

exports.update = () => {}

exports.delete = () => {}
