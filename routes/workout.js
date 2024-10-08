const express = require("express");
const router = express.Router();
const workoutController = require("../controllers/workout");
const {verify} = require("../auth");

// Create a new workout (requires authentication)
router.post("/addWorkout", verify, workoutController.createWorkout);

// Get all workouts for a specific user (requires authentication)
router.get("/getMyWorkouts", verify, workoutController.getUserWorkouts);

// Update a specific workout (requires authentication)
router.put("/updateWorkout/:id", verify, workoutController.updateWorkout);

// Delete a specific workout (requires authentication)
router.delete("/deleteWorkout/:id", verify, workoutController.deleteWorkout);

// Get a specific workout by ID (requires authentication)
router.get("/workout/:id", verify, workoutController.getWorkoutById);

// Complete workout status (requires authentication)
router.put("/completeWorkoutStatus/:id", verify, workoutController.updateWorkoutStatus);

module.exports = router;
