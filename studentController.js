const connection = require('../utils/db-connection');
const db = require('../utils/db-connection')


const addEntries=(req,res)=>{

    const {email,name} = req.body;
    const insertQuery='INSERT INTO STUDENTS (email,name) VALUES (?,?)'

    db.execute(insertQuery,[email,name],(err) =>{
        if(err){
            console.log(err.message)
            res.status(200).send(err.message)
            db.end();
            return;
        }
        console.log("INSERTED")
        res.status(200).send(`Student ${name} is successfully added`)
    })
}

const updateEntry= (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const updateQuery='UPDATE STUDENTS set name = ? where id=?'

    db.execute(updateQuery,[name,id],(err,result) =>{
        if(err){
            console.log(err.message)
            res.status(200).send(err.message)
            db.end();
            return;
        }
        if(result.affectedRows===0)
        {
             res.status(404).send("Student not found")
           
            return;
        }
        console.log("UPDATED")
        res.status(200).send(`Student has been updated`)
    })
}

const deleteEntry= (req,res)=>{
    const {id} = req.params;
    const updateQuery='DELETE from STUDENTS where id=?'

    db.execute(updateQuery,[id],(err,result) =>{
        if(err){
            console.log(err.message)
            res.status(200).send(err.message)
            db.end();
            return;
        }
        if(result.affectedRows===0)
        {
             res.status(404).send("Student not found")
           
            return;
        }
        console.log("DELETED")
        res.status(200).send(`Student has been deleted`)
    })
}

module.exports={
    addEntries,
    updateEntry,
    deleteEntry
}