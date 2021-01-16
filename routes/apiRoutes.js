//Load data source

const mongoose = require("mongoose");
const db = require("../models");

module.exports = (app) => {
  // GET LAST WORKOUT --- fetch("/api/workouts") ------
  app.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ])
      .sort({ day: "desc" })
      .limit(7)
      .sort({ day: "asc" })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // ADD EXERCISE ---- fetch("/api/workouts/" + id ----------------
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // CREATE NEW WORKOUT ---- fetch("/api/workouts" ----------------
  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then((dbWorkout) => {
        console.log("dbWorkout: ", dbWorkout);
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // GET WORKOUT IN RANGE -- fetch(`/api/workouts/range`) ---
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ])
      .sort({ day: "desc" })
      .limit(7)
      .sort({ day: "asc" })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
