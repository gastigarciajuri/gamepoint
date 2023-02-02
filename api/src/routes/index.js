const { Router } = require('express');

const userRoutes = require('./userRoute')
const productRoutes = require("./productsRoutes")

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
routes.use('/user', userRoutes)
routes.use('/product', productRoutes);


module.exports = routes;
