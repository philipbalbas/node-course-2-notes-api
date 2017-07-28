const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://yves:yves@ds127063.mlab.com:27063/notes-api', {
  useMongoClient: true
})

// mongoose.connect('mongodb://localhost:27017/TodoApp', {
//   useMongoClient: true
// })

module.exports = { mongoose }
