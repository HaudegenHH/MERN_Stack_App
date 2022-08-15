const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true });

// reps (repetition)
// the 2nd parameter (timeStamps) that the constructor takes, creates 
// automatically a createdAt property when the doc was created

// make a model based on that jst created Schema and export it as "Workout"
// ...to interact with the "workouts" collection (cause it automatically creates)
// a collection which is: the name of the Model pluralised
module.exports = mongoose.model('Workout', workoutSchema);