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

// GET all courses in a subject (ie. CHEM, APSC, etc.)
router.get('/subject/:subject', (req, res) => {
    let subj = req.params.subject;

    Course.find({ subject: subj })
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

// GET all prerequisites for a specific course
router.get('/:code/prereq', (req, res) => {
    let code = req.params.code;
    code = code.substring(0,4) + " " + code.substring(4,code.length);
    Course.find({ course_code: code })
     .then((result) => {
         res.send(result[0].prereqs);
     })
     .catch((err) => {
         console.log(err);
     });
});

// GET the title of a course
router.get('/:code/title', (req, res) => {
    let code = req.params.code;
    code = code.substring(0,4) + " " + code.substring(4,code.length);
    Course.find({ course_code: code })
     .then((result) => {
         res.send(result[0].course_title);
     })
     .catch((err) => {
         console.log(err);
     });
});

// GET the summary of a course
router.get('/:code/summary', (req, res) => {
    let code = req.params.code;
    code = code.substring(0,4) + " " + code.substring(4,code.length);
    Course.find({ course_code: code })
     .then((result) => {
         res.send(result[0].summary);
     })
     .catch((err) => {
         console.log(err);
     });
});

// GET all courses with the specified course code and section
router.get('/:code/:section', (req, res) => {
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

// POST new course into db
router.post('/add', (req, res) => {
    const course = new Course(req.body);

    course.save()
     .then((result) => res.send(`Course ${course.course_code} was added to the database!`))
     .catch((err) => console.log(err));
});

// PUT update a specific courses field
router.put('/update/:code', (req, res) => {
    let code = req.params.code;
    code = code.substring(0,4) + " " + code.substring(4,code.length);

    Course.findOneAndUpdate({ course_code: code }, req.body)
     .then((result) => res.send(`Successfully changed field in ${code}`))
     .catch((err) => console.log(err));
});





export default router;