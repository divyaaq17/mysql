const express = require('express');
const studentController = require('../Controllers/studentController')
const route = express.Router();

route.post('/add',studentController.addEntries)
route.put('/update/:id',studentController.updateEntry)
route.put('/delete/:id',studentController.deleteEntry)


module.exports=route;