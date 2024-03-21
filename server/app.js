// IMPORTING DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//IMPORT ROUTER
const ProductRoutes = require('./routes/productroute')

// ASSIGNING EXPRESS VARIABLES
const app = express();
const port = 3000;

// CONNECTING TO MONGODB
mongoose.connect('mongodb://localhost:27017/techthoth', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.once('open', () => {
    console.log('Database connection established');
});

// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES
app.get('/', (req, res) => {
    console.log('Server has been established');
    res.send('Server is up and running!');
});

// STARTING THE SERVER
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use('/api/products', ProductRoutes);