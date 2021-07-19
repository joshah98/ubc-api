import express from 'express';
import Course from '../models/courseModel.js';

const router = express.Router()

// GET all courses in the session
router.get('/', (req, res) => {
    Course.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET all courses with the specified course code
router.get('/:code', (req, res) => {
    let code = req.params.code;
    code = code.substring(0,4) + " " + code.substring(4,code.length);
    Course.find({ course_code: code })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET all sections for a specified course code
router.get('/:code/sections', (req, res) => {
    let code = req.params.code;
    code = code.substring(0,4) + " " + code.substring(4,code.length);

    Course.find({ course_code: code })
        .then((results) => {
            let sections = [];

            for (let x of results) {
                sections.push(x.section);
            }

            res.send(sections);
        })
});

// GET all courses with the specified course code and section
router.get('/:code/:section', (req, res) => {
    console.log("HERE");
    let code = req.params.code;
    let section = req.params.section;
    code = code.substring(0,4) + " " + code.substring(4,code.length);
    Course.find({ 
        course_code: code, 
        section: section 
    })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET all prerequisites for a specific course
router.get('/:code/prereq', (req, res) => {
    let code = req.params.code;
    console.log("HELLO");
    code = code.substring(0,4) + " " + code.substring(4,code.length);
    Course.find({ course_code: code })
     .then((result) => {
         console.log(result);
         res.send(result);
     })
     .catch((err) => {
         console.log(err);
     });
});




export default router;