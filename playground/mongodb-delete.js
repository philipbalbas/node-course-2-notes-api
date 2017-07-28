const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // deleteMany
  db.collection('Users').deleteMany({name: 'Philip'}).then(result => {
    console.log(result)
  })

  // deleteOne
  db.collection('Users').deleteOne({name: 'Yes'}).then(result => {
    console.log(result)
  })


  // findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5979e0425c45ed028608b819')}).then(result => {
    console.log(result)
  })

})
