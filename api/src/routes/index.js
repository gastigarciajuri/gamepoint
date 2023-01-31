const { Router } = require('express');

const userRoutes = require('./userRoute')

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
routes.use('/user', userRoutes);


module.exports = routes;
