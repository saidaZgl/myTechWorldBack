const mongoose = require("mongoose");

const dbUrl =
  "mongodb+srv://capsule:azerty@saidazgl-0zpfc.mongodb.net/mytechworldapp?retryWrites=true&w=majority";

const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};

mongoose.connect(dbUrl, options, error => {
  if (error) {
    console.error("errrrror", error);
  } else {
    console.log("My database is operational :)");
  }
});

module.exports = {
  mongoose: mongoose
};
