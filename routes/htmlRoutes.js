var path = require("path");

module.exports = (app) => {
  // Get /exercise.html
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // Get / "index.html"
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Get /stats.html "Dashboard"
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
