// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");

// Express Setup
const PORT = process.env.PORT || 3000;
const app = express();

// Morgan Logger
app.use(logger("dev"));

// Express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Database Connection
const URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => console.log(err)
);

// Creating Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Server Port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
