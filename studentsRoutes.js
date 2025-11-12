const express = require('express');
const studentController = require('../Controllers/studentController')
const route = express.Router();

route.post('/add',studentController.addEntries)
route.get('/ShowAll',studentController.showEntries)
route.get('/ShowStudentbyId/:id',studentController.showStudentbyId)
route.put('/update/:id',studentController.updateEntry)
route.delete('/delete/:id',studentController.deleteEntry)


module.exports=route;
