import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import coursesRoutes from './routes/courses.js';
import Course from './models/courseModel.js';
import morgan from 'morgan';

const app = express();
const PORT = 5000;

// Connect to MongoDB
const dbURI = 'mongodb+srv://admin:Strongpassword123@ubc-api-cluster.dfiae.mongodb.net/ubc-api-db?retryWrites=true&w=majority';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(dbURI, options)
    .then((res) => {
        // After connection to db is established, open port for requests
        app.listen(PORT, ()=>{
            console.log(`Server running on port: http://localhost:${PORT}`)
        });
    })
    .catch((err) => console.log(err));

app.use(bodyParser.json());

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.redirect('/courses');
})

app.use('/courses', coursesRoutes);

app.get('/add-course', (req, res) => {
    const course = new Course({
        course_code: "TEST 000",
        course_title: "Testing db",
        section: "000",
        subject: "TEST",
        summary: "Testing db summary",
        credits: "Credits: 0",
        prereqs: "N/A",
        term: "Term: 0",
        days: "N/A",
        start: "N/A",
        end: "N/A",
        building: "N/A",
        room: "N/A",
        instructor: "N/A"
    });

    course.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});





// GET /courses: return all courses
// GET /courses/:code : courses with that code (all sections)
// GET /courses/:code/sections : get all available sections for a specific course code
// GET /courses/:code/:section : get just the one specific sections course info with that course code
// GET /courses/:code/:section/start : get start time for specific course section
// GET /courses/:code/:section/end : get end time for specific course section
// GET /courses/:code/:section/instructor : get instructor info for a course section
// GET /courses/:code/:section/term : get the term in which the section is being taught
// GET /courses/:code/:section/building : get the building name in which a section is being taught
// GET /courses/:code/:section/room : get the room number in which a course is being taught

// GET /courses/:code/title: get the title of a course
// GET /courses/:code/summary : get the summary for a course
// GET /courses/:code/prereq : get the prerequisites for a specific course code
// GET /courses/:code/credits : get the number of credits for a course

// GET /courses/:subject : get all courses in this department
// GET /courses/:term : get all courses in this term
// GET /courses/:instructor : get all courses taught by this instructor
