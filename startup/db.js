const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
//   const db = process.env.vidly_db;
  mongoose.connect('mongodb+srv://zonic:syagAXVEthNGhAlx@test.snk5gii.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => winston.info(`Connected to ${db}...`));
}