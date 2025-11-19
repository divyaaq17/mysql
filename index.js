const express = require('express')
const db = require("./utils/db-connection")
const studentRoutes = require('./Routes/studentsRoutes')
const studentModel = require("./models/students")
const app = express();

app.use(express.json())
app.get('/',(req,res)=>
{
    res.send('Hello World!')
})

app.use("/students",studentRoutes)

db.sync().then((error)=>{
app.listen(4000,(err)=>{
    console.log("Server is running")
})
})
.catch((error)=>{
console.log(error)
})

