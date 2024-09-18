const { MongoClient } = require('mongodb');

let dbConnection;
let uri =
  'mongodb+srv://leahamorsalgado:mongodbpassword@cluster0.9q2sks6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db('portfolio');

        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
