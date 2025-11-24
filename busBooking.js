const express = require('express')
const db2 = require("./utils/db-connection2")
const busRoutes = require('./Routes/busRoutes')

const app = express();

app.use(express.json())
app.get('/',(req,res)=>
{
    res.send('Hello World!')
})

app.use("/bus",busRoutes)

db2.sync().then((error)=>{
app.listen(4000,(err)=>{
    console.log("Server is running")
})
})
.catch((error)=>{
console.log(error)
})

