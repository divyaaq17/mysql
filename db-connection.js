const mysql = require('mysql2')

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

    const createQuery = `create table IF NOT EXISTS students(id INT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(20),
                        email VARCHAR(20))`

connection.execute(createQuery,(err)=>{
    if(err){
    console.log(err);
        connection.end()
        return;
    }
    console.log("table is created")
})
})

module.exports = connection;