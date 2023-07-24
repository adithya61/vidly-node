const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  var mongo =
    "mongodb+srv://zonic:syagAXVEthNGhAlx@test.snk5gii.mongodb.net/test?retryWrites=true&w=majority";
  const db = config.get(mongo);
  mongoose.connect(db).then(() => winston.info(`Connected to ${db}...`));
};
