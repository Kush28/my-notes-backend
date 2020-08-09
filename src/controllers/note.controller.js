import models from '../models'

exports.create = ({ title, body, tags }) => {
  console.log(tags)
  const note = new models.Note({
    title,
    body,
    tags
  })
  return note.save()
}

exports.find = (ids) =>
  models.Note.find({
    _id: { $in: ids }
  })

exports.delete = (id) => models.Note.findByIdAndDelete(id)

exports.update = ({ id, title, body, tags }) => {
  return models.Note.updateOne(
    {
      _id: id
    },
    { $set: { title, body, tags } }
  )
}
