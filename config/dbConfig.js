const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const connectToDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://verie:verie@cluster0.tm7ca.mongodb.net/ele-billing",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectToDb;
