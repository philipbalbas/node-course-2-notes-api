const { ObjectID } = require('mongodb')
const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/user')

let id = '597a8e6cbb35c4043a089646'

if (!ObjectID.isValid(id)) {
  console.log('ID not valid')
}

Todo.find({
  _id: id,
}).then(todos => {
  console.log('Todos', todos)
})

Todo.findOne({
  _id: id,
}).then(todo => {
  console.log('Todos', todo)
})

Todo.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log('Id not found')
    }
    console.log('Todo By Id', todo)
  })
  .catch(e => console.log(e))

User.findById('597a3d5e5159e50645a99726').then(
  user => {
    if (!user) {
      return console.log('User not found')
    }
    console.log(JSON.stringify(user, undefined, 2))
  },
  e => console.log(e),
)
