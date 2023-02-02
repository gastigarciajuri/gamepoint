const express = require('express');

const userRoutes = require('./userRoutes')

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = express.Router();

// Add routes
routes.use('/user', userRoutes);


module.exports = routes;