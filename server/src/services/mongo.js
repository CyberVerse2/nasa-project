const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://ejioforcelestine77:oT5BHKCEHyOLe7PS@nasa.ire5olv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

async function mongoDisconnect() {
  await mongoose.disconnect()
}


module.exports = {mongoConnect, mongoDisconnect}