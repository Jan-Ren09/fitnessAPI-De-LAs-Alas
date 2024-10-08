const Workout = require('../models/Workout');

// Create a new workout
exports.createWorkout = (req, res) => {
    const { name, duration } = req.body; 

    const userId = req.user.id; 

    const workout = new Workout({
        userId, 
        name,
        duration
    });

    workout.save()
        .then((savedWorkout) => {
            res.status(201).json(savedWorkout); 
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
};

// Get all workouts for the authenticated user
exports.getUserWorkouts = (req, res) => {
    const userId = req.user.id; 

    Workout.find({ userId }) 
        .then((workouts) => {
            res.status(200).json({workouts: workouts}); 
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
};

// Update a specific workout
exports.updateWorkout = (req, res) => {
    const { id } = req.params;
    const updates = req.body; 

    Workout.findByIdAndUpdate(id, updates, { new: true})
        .then((updatedWorkout) => {
            if (!updatedWorkout) {
                return res.status(404).json({ message: "Workout not found" });
            }
            res.status(200).json(updatedWorkout);
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
};

// Delete a specific workout
exports.deleteWorkout = (req, res) => {
    const { id } = req.params;

    Workout.findByIdAndDelete(id)
        .then((deletedWorkout) => {
            if (!deletedWorkout) {
                return res.status(404).json({ message: "Workout not found" });
            }
            res.status(200).json({ message: "Workout deleted successfully" });
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
};

// Get a specific workout by ID
exports.getWorkoutById = (req, res) => {
    const { id } = req.params;

    Workout.findById(id)
        .then((workout) => {
            if (!workout) {
                return res.status(404).json({ message: "Workout not found" });
            }
            res.status(200).json(workout);
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
};

// Update the status of a specific workout
exports.updateWorkoutStatus = (req, res) => {
    const { id } = req.params;

    Workout.findByIdAndUpdate(
        id,
        { status: "completed" }, 
        { new: true} 
    )
    .then((updatedWorkout) => {
        if (!updatedWorkout) {
            return res.status(404).json({ message: "Workout not found" });
        }
        res.status(200).json({
            message: "Workout status updated successfully",
            updatedWorkout: updatedWorkout
        });
    })
    .catch((error) => {
        res.status(500).json({ message: error.message });
    });
};

