const express = require('express');
const route = express.Router();
const dashboardController = require('../controllers/dashboardController');

route.get('/', dashboardController.index); //localhost3000/dashboard

module.exports = route;