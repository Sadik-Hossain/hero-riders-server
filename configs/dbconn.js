require("dotenv").config();
const mongoose = require("mongoose");
const MONGO = process.env.MONGO_PROD || process.env.MONGO_DEV;
mongoose.set("strictQuery", false);
const dbconn = async () => {
  try {
    const {
      connection: { host, port, name },
    } = await mongoose.connect(MONGO);

    console.log("mongo started on", host, port, name);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = dbconn;
