const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for a course
const CourseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference the User model for the instructor
        required: true,
    },
    duration: {
        type: Number,  // Duration in hours
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: ["course", "product"],
        required: true,
    },
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        default: 'Beginner',
    },
    students: [{ // Field to track enrolled students
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference the User model for students
    }]
}, { timestamps: true }); // Automatically handles createdAt and updatedAt

// Create and export the Course model
const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;