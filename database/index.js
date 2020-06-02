const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/adidas';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.once('open', function() {
    console.log('connected');
  });

module.exports = db;




