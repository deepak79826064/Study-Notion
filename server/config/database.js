const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(console.log("DB Connected SuccessFully"))
    .catch((error) => {
      console.log(error);
      console.log("DB Connetion Failed");
      console.log(error);
      process.exit(1);
    })
};
