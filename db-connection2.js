const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('BusDB','root','mysql123',{
    host:'localhost',
    dialect:'mysql'
});

(async()=>{
try{

   await sequelize.authenticate()
   console.log("Connection successful")
}catch(error){
console.log(error)
}})();

module.exports=sequelize;

/* const mysql = require('mysql2')

const connection2 =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysql123',
    database:'testDB'
})

connection2.connect((err)=>{
    if(err){
        console.log(err);
             return;
    }
    console.log("connection2 has been created");

    let createQuery = `create table IF NOT EXISTS Users(id INT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(255),
                        email VARCHAR(255))`

connection2.execute(createQuery,(err)=>{
    if(err){
    console.log(err);
        connection2.end()
        return;
    }
    console.log("User table is created")
})

createQuery = `create table IF NOT EXISTS Buses(id INT AUTO_INCREMENT PRIMARY KEY,
                        busNumber INT,
                        totalSeats INT,
                        availableSeats INT)`

connection2.execute(createQuery,(err)=>{
    if(err){
    console.log(err);
        connection2.end()
        return;
    }
    console.log("Buses table is created")
})

createQuery = `create table IF NOT EXISTS Bookings(id INT AUTO_INCREMENT PRIMARY KEY,
                        seatNumber INT)`

connection2.execute(createQuery,(err)=>{
    if(err){
    console.log(err);
        connection2.end()
        return;
    }
    console.log("Bookings table is created")
})

createQuery = `create table IF NOT EXISTS Payments(id INT AUTO_INCREMENT PRIMARY KEY,
                        amountPaid INT,
                        paymentStatus VARCHAR(20))`

connection2.execute(createQuery,(err)=>{
    if(err){
    console.log(err);
        connection2.end()
        return;
    }
    console.log("Payments table is created")
})

})

module.exports = connection2; */
