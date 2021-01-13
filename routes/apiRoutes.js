//Load data source

const mongoose = require("mongoose");
const db = require("../models");

// getting last workout --- fetch("/api/workouts") ------


// adding a new exerciss ---- fetch("/api/workouts/" + id ----------------



// creating a new workout ---- fetch("/api/workouts" ----------------


// getting workout in range -- fetch(`/api/workouts/range`) ---



// getting all workout

// with the sum of all workout -- suggestion: using aggregate


// db.Workout.aggregate([
//   {
//     $addFields: {
//       totalWeight: { $sum: "$weight" },
//       totalDuration: { $sum: "$duration" },
//     },
//   },
// ]);


