const client = require('mongodb').MongoClient;

let server;

const URI =
  'mongodb+srv://alvacampos:alvacampos123@cluster0.674pq.mongodb.net/Cluster0?authSource=admin&replicaSet=atlas-cdu7td-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true';

module.exports = {
  connectServer: (callback) => {
    client.connect(URI, (err, database) => {
      if (err) {
        return console.log('Server Error');
      } else {
        server = database.db('wobiz');
        return callback(err);
      }
    });
  },
  getDb: () => server
};
