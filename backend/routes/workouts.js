const express = require('express');
const router = express.Router();
const {
  getWorkouts,
  getWorkoutDetails,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController');

router.get('/', getWorkouts);
router.get('/:id', getWorkoutDetails);
router.post('/', createWorkout);
router.delete('/:id', deleteWorkout);
router.patch('/:id', updateWorkout);

module.exports = router;
