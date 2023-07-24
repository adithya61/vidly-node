const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();

require("../startup/logging")();
require("../startup/cors")(app);
require("../startup/routes")(app);
require("../startup/db")();
// require("./startup/config")();
require("../startup/validation")();

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "Hello World",
  });
});

console.log("INFO: server set up done");

// "db": "mongodb+srv://zonic:syagAXVEthNGhAlx@test.snk5gii.mongodb.net/test?retryWrites=true&w=majority",
// "port": "27017"
module.exports = server;
