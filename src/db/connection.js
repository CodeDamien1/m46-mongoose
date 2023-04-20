const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

connection();
