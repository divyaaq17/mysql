const express = require('express');
const busController = require("../Controllers/busController")
const route = express.Router();

route.post('/addBus',busController.addBusEntries)
route.get('/retriveBus/:num',busController.showBus)
route.post('/addUser',busController.addUserDetails)
route.get('/retriveUsers',busController.showUsers)


module.exports=route;