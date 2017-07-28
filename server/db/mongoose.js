const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const MONGODB_URI = process.env.MONGODB_URI
  ? 'mongodb://yves:yves@ds127063.mlab.com:27063/notes-api'
  : 'mongodb://localhost:27017/TodoApp'

mongoose.connect(MONGODB_URI, {
  useMongoClient: true,
})

module.exports = { mongoose }
