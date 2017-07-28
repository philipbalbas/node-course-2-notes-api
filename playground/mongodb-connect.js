const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  db.collection('Todos').insertOne({
    text: 'Something more to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err)
    }

    console.log(JSON.stringify(result.ops, undefined, 2))
  })
  // Inser new doc into Users (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Philip',
  //   age: 25,
  //   location: 'Makati',
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err)
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp())
  // })

  db.close()
})
