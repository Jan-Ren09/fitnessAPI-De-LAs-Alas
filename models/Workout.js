const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is Required']
    },
    name: {
        type: String,
        required: [true, 'Exercise Name is Required']
    },
    duration: {
        type: String,
        required: [true, 'Exercise duration is Required']
    },
    status: {
        type: String,
        default: 'pending'
    },
    dateAdded: {
        type: Date,
        default: Date.now 
    }
});

module.exports = mongoose.model('Workout', workoutSchema);
