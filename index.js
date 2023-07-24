const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();
const serverless = require("serverless-http");
const { Err } = require("joi/lib/errors");

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
// require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

console.log("INFO: server set up done");

throw Error(router);
throw Error("this is an Error");

// "db": "mongodb+srv://zonic:syagAXVEthNGhAlx@test.snk5gii.mongodb.net/test?retryWrites=true&w=majority",
// "port": "27017"

module.exports = server;
