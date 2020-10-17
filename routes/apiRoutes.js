const Workout = require("../models/workout.js");

module.exports = (app) => {
  // Get Workout
  app.get("/api/workouts", (req, res) => {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // Post Workout
  app.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        console.log("err", err);
        res.json(err);
      });
  });

  // Put Workout
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then((data) => res.json(data))
      .catch((err) => {
        console.log("err", err);
        res.json(err);
      });
  });

  // Get Woorkout Range for /stats.html
  app.get("/api/workouts/range", (req, res) => {
    Workout.find()
      // Limit to 7 for the 7 days of the week
      .limit(7)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
