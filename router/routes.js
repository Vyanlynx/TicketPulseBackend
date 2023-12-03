const Express = require('express');
const Route = Express.Router();
const { emailDetails } = require('./subRoutes/PersonalDetails')

Route.get('/allMembers', emailDetails)

module.exports = Route;