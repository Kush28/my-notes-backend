import models from '../models'

exports.create = ({ externalId, externalProvider, name, avatar }) => {
  const user = new models.User({
    externalId,
    externalProvider,
    name,
    avatar
  })
  return user.save()
}

exports.findAll = () => models.User.find()

exports.findByExternal = async (extID, provider) => {
  const { id, externalId, externalProvider, name, avatar } = await models.User.findOne({
    externalId: extID,
    externalProvider: provider
  })
  return { id, externalId, externalProvider, name, avatar }
}

exports.findById = (id) => models.User.findById(id)

exports.update = () => {}

exports.delete = () => {}
