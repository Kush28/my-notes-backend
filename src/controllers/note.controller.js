import models from '../models'

exports.create = ({ title, body, tags }) => {
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
