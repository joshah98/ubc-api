import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import coursesRoutes from './routes/courses.js';
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
