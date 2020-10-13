const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/workout",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => console.log(err)
);
