const cors = require("cors");
const router = require("../routes/genres");

module.exports = function (app) {
  app.use("../dist/", router);
};
