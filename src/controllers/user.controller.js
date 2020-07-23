import models from '../models'

exports.create = ({ externalId, externamProvider, name, avatar }) => {
  const user = new models.User({
    externalId,
    externamProvider,
    name,
    avatar
  })
  return user.save()
}

exports.findAll = () => models.User.find()

exports.findByExternal = (externalId) => models.User.findOne({ externalId })

exports.findById = (id) => models.User.findById(id)

exports.update = () => {}

exports.delete = () => {}
