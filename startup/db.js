const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const db = config.get(
    "mongodb+srv://zonic:syagAXVEthNGhAlx@test.snk5gii.mongodb.net/test?retryWrites=true&w=majority"
  );
  mongoose.connect(db).then(() => winston.info(`Connected to ${db}...`));
};
