const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  const db = process.env.vidly_db;
  mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`));
}