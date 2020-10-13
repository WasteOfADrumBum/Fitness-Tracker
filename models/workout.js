const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          enum: ["cardio", "resistance"],
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        duration: {
          type: Number,
          required: true,
        },
        distance: {
          type: Number,
          required: function () {
            return this.type === "cardio";
          },
        },
        weight: {
          type: Number,
          required: function () {
            return this.type === "resistance";
          },
        },
        sets: {
          type: Number,
          required: function () {
            return this.type === "resistance";
          },
        },
        reps: {
          type: Number,
          required: function () {
            return this.type === "resistance";
          },
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce(
    (total, exercise) => (total += exercise.duration),
    0
  );
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

/* © Ben Benson */
