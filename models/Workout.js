const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        unique: false,
      },

      name: {
        type: String,
        trim: true,
        unique: false,
      },

      duration: {
        type: Number,
        unique: false,
      },

      distance: {
        type: Number,
        unique: false,
      },

      weight: {
        type: Number,
        unique: false,
      },

      reps: {
        type: Number,
        unique: false,
      },

      sets: {
        type: Number,
        unique: false,
      },
    },
  ],
},
{
  toJSON:{
    virtuals: true
  }
}
);


// WorkoutSchema.virtual("totalDuration").get(()=>{
//   return this.exercises.reduce((total, exercise) => {
//     return total + exercise.duration;
//   })
// });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
