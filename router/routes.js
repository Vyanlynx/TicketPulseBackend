const Express = require('express');
const Route = Express.Router();
const {emailDetails}=require('./subRoutes/PersonalDetails')

Route.get('/allMembers', emailDetails)
console.log("first NAM")
module.exports = Route;