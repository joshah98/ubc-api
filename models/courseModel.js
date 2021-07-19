import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    course_code: {
        type: String,
        required: true
    },
    course_title: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    credits: {
        type: String,
        required: true
    },
    prereqs: {
        type: String,
        required: true
    },
    term: {
        type: String,
        required: true
    },
    days: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    building: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Course = mongoose.model('course', courseSchema);

export default Course;