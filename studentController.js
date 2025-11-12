
const db = require('../utils/db-connection')


const addEntries=(req,res)=>{

    const {email,name,age} = req.body;
    const insertQuery='INSERT INTO STUDENTS (email,name,age) VALUES (?,?,?)'

    db.execute(insertQuery,[email,name,age],(err) =>{
        if(err){
            console.log(err.message)
            res.status(200).send(err.message)
            
            return;
        }
        console.log("INSERTED")
        res.status(200).send(`Student ${name} is successfully added`)
    })
}

const updateEntry= (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const {email} = req.body;
    const updateQuery='UPDATE STUDENTS set name = ?, email=? where id=?'

    db.execute(updateQuery,[name,email,id],(err,result) =>{
        if(err){
            console.log(err.message)
            res.status(200).send(err.message)
            
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

const showEntries = (req,res)=>{
  
    const selectQuery = `Select * from Students`   
         db.execute(selectQuery,(err)=>{
        if(err){
            console.log(err.message);
            res.status(200).send(err.message);
            
            return;
            }
        console.log("RETRIEVE ALL STUDENTS")
        res.status(200).send("RETRIEVE ALL STUDENTS..")

    })

}

const showStudentbyId = (req,res)=>{
    const {id} = req.params;
    const selectQuery = `Select * from Students where id>?`   
         db.execute(selectQuery,[id],(err)=>{
        if(err){
            console.log(err.message);
            res.status(200).send(err.message);
            
            return;
            }
        console.log("RETRIEVE THE STUDENT")
        res.status(200).send("RETRIEVE THE STUDENT..")

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
    deleteEntry,
    showEntries,
    showStudentbyId
}
