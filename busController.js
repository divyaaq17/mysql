const { Op } = require("sequelize");

const db2 = require('../utils/db-connection2');
const busModel = require("../models/Bus")
const  userModel= require("../models/User")
const paymentModel = require("../models/payment")
const  bookingModel= require("../models/booking")

const addBusEntries = async (req,res)=>{
    try {
        const {busNumber,totalSeats,availableSeats}= req.body;
        const bus = await busModel.create({
    busNumber:busNumber,
    totalSeats:totalSeats,
    availableSeats:availableSeats
});
 res.status(201).send(`bus ${busNumber} is successfully added`)
    } catch (error) {
         res.status(500).send("Unable to make an entry")
    }

}

const addUserDetails = async (req,res)=>{

    try {
         const {email,name}= req.body;
          const user = await userModel.create({
    email:email,
    name:name
});
 res.status(201).send(`User ${name} is successfully added`)
    } catch (error) {
           res.status(500).send("Unable to make an entry")
    }
  
res.status(200).send(`User is successfully added`)
}

const showBus =async (req,res)=>{
    try {
        const {num} = req.params;
        const busses = await busModel.findAll({
  where: {
    availableSeats:{
    [Op.gt]: num,
    }
  },
});
console.log(busses.every(bus => bus instanceof busModel)); 
console.log('All busses:', JSON.stringify(busses, null, 2));
    } catch (error) {
        res.status(500).send("Busses not found")
    }
       
  res.status(200).send("RETRIEVE ALL BUSES..")
}

const showUsers = async (req,res)=>{
   try {
    const users = await userModel.findAll();
console.log(users.every(user => user instanceof userModel)); // true
console.log('All users:', JSON.stringify(users, null, 2));
   } catch (error) {
    res.status(500).send("Users not found")
   }
    
    res.status(200).send("RETRIEVE ALL USERS..")
}






module.exports= {addBusEntries,
    addUserDetails,
    showBus,
    showUsers
};
