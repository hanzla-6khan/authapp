const mongoose = require("mongoose");

exports.Connection = async () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("database is connected ");
    })
    .catch((e) => {
      console.log("failed to connect db", e.message);
    });
};
