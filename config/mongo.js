const mongoose = require("mongoose");
const connection = async () => {
  mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
      console.log("Connection Established");
    })
    .catch(() => {
      console.log("Connection Failed");
    });
};

module.exports = connection;
