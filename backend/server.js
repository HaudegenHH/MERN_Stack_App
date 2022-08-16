const express = require('express');
const app = express();
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workouts');

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const log = console.log;


// middleware to get access to the form data 
app.use(express.urlencoded({extended: true}));

// middleware to get the json parsed to the request object
app.use(express.json());

app.use((req, res, next) => {
  log(req.path, req.method)
  next()
})

app.use('/api/workouts', workoutRoutes);

// connect to DB with mongoose
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {    
    // only start to listen when there is a db connection
    app.listen(PORT, () => {
      log(`connected to MongoDB and listening on port: ${PORT}`);
    })
  })
  .catch(err => log(err.message))

//app.use(express.static('public'));

app.get('/', (req, res) => {
  res.json({msg: 'Welcome to the app'});
})

app.post('/', (req, res) => {
  
  log(req.body);
  
  res.json({msg: 'data received'});
})

