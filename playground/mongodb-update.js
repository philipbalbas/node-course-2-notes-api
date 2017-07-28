const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // db
  //   .collection('Todos')
  //   .findOneAndUpdate(
  //     { _id: new ObjectID('5979e31eb0bfba39283f1a0f') },
  //     {
  //       $set: {
  //         text: 'Finish tutorial',
  //         completed: true,
  //       },
  //     },
  //     {
  //       returnOriginal: false,
  //     },
  //   )
  //   .then(
  //     result => {
  //       console.log(result)
  //     },
  //     err => {
  //       console.log(err)
  //     },
  //   )

  db
    .collection('Users')
    .findOneAndUpdate({
      _id: new ObjectID('5979e0233d17170254448aea')
    }, {
      $inc: {
        age: 1
      },
      $set: {
        name: 'Philip'
      }
    }, {
    returnOriginal: false
    })
    .then(
      result => console.log(result),
      err => console.log(err)
    )
})
