const express = require('express')
const mysql = require('mysql2')
const app = express();

const connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysql123',
    database:'testDB'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
             return;
    }
    console.log("Connection has been created");

    let createQuery = `create table Users(id INT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(255),
                        email VARCHAR(255))`

connection.execute(createQuery,(err)=>{
    if(err){
    console.log(err);
        connection.end()
        return;
    }
    console.log("User table is created")
})

createQuery = `create table Buses(id INT AUTO_INCREMENT PRIMARY KEY,
                        busNumber INT,
                        totalSeats INT,
                        availableSeats INT)`

connection.execute(createQuery,(err)=>{
    if(err){
    console.log(err);
        connection.end()
        return;
    }
    console.log("Buses table is created")
})

createQuery = `create table Bookings(id INT AUTO_INCREMENT PRIMARY KEY,
                        seatNumber INT)`

connection.execute(createQuery,(err)=>{
    if(err){
    console.log(err);
        connection.end()
        return;
    }
    console.log("Bookings table is created")
})

createQuery = `create table Payments(id INT AUTO_INCREMENT PRIMARY KEY,
                        amountPaid INT,
                        paymentStatus VARCHAR(20))`

connection.execute(createQuery,(err)=>{
    if(err){
    console.log(err);
        connection.end()
        return;
    }
    console.log("Payments table is created")
})

})
app.get('/',(req,res)=>
{
    res.send('Hello World!')
})

app.listen(4000,(err)=>{
    console.log("Server is running")
})