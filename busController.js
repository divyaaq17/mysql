const db2 = require('../utils/db-connection2');

const addBusEntries = (req,res)=>{
    const {busNumber,totalSeats,availableSeats}= req.body;
    const insertQuery = "INSERT INTO BUSES (busNumber,totalSeats,availableSeats) VALUES (?,?,?)"

    db2.execute(insertQuery,[busNumber,totalSeats,availableSeats],(err)=>{
        if(err){
            console.log(err.message);
            res.status(200).send(err.message);
            
            return;
            }
        console.log("BUS ENTRY INSERTED")
        res.status(200).send(`Bus ${busNumber} is successfully added`)

    })


}

const addUserDetails = (req,res)=>{
    const {email,name}= req.body;
    const insertQuery = "INSERT INTO USERS (email,name) VALUES (?,?)"

    db2.execute(insertQuery,[email,name],(err)=>{
        if(err){
            console.log(err.message);
            res.status(200).send(err.message);
            
            return;
            }
        console.log("USER ENTRY INSERTED")
        res.status(200).send(`User ${name} is successfully added`)

    })

}

const showBus = (req,res)=>{
    const {num} = req.params;
    const selectQuery = `Select * from Buses where availableSeats>?`   
         db2.execute(selectQuery,[num],(err)=>{
        if(err){
            console.log(err.message);
            res.status(200).send(err.message);
            
            return;
            }
        console.log("RETRIEVE ALL BUSES")
        res.status(200).send("RETRIEVE ALL BUSES..")

    })

}

const showUsers = (req,res)=>{
   
    const selectQuery = "Select * from Users"   
         db2.execute(selectQuery,(err)=>{
        if(err){
            console.log(err.message);
            res.status(200).send(err.message);
          
            return;
            }
        console.log("RETRIEVE ALL USERS")
        res.status(200).send("RETRIEVE ALL USERS..")

    })

}






module.exports= {addBusEntries,
    addUserDetails,
    showBus,
    showUsers
};