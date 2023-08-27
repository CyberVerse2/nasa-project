const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");


const app = express();

const api = require('./routes/api')


app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// logging requests
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use('/v1', api)


app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
