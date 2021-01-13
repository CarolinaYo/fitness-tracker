//Load data source

const mongoose = require("mongoose");
const db = require("../models");

module.exports = (app) => {

// getting last workout --- fetch("/api/workouts") ------
app.get("//api/workouts", (req, res) => {
    db.Workout.find({}, (err, found) => {
      if (err) {
        console.log(err);
      } else {
        res.json(found);
      }
    });
  });

// adding a new exerciss ---- fetch("/api/workouts/" + id ---------------- 
// app.put("/api/workouts/:id", (req,res) => {
//     db.Workout.findByIdandUpdate(
//         {_id},
//       { $push: { exercises: _id } }, 
//       { new: true })
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

// creating a new workout ---- fetch("/api/workouts" ----------------
app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then(dbWorkout => {
          console.log("dbWorkout: ", dbWorkout)
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

// getting workout in range -- fetch(`/api/workouts/range`) ---
        // app.get("//api/workouts/range", (req, res) => {
            // db.Workout.find({}, (err, found) => {
            //   if (err) {
            //     console.log(err);
            //   } else {
            //     res.json(found);
            //   }
            // });
        //   });

        // with the sum of all workout??  -- suggestion: using aggregate method



                    // db.Workout.aggregate([
                    //   {
                    //     $addFields: {
                    //       totalWeight: { $sum: "$weight" },
                    //       totalDuration: { $sum: "$duration" },
                    //     },
                    //   },
                    // ]);



}


