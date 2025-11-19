
const db = require('../utils/db-connection')
const studentModel = require('../models/students')

const addEntries=async (req,res)=>{

try {
    const {email,name,age} = req.body;
const student = await studentModel.create({
    email:email,
    name:name,
    age:age
});
 res.status(201).send(`Student ${name} is successfully added`)


} catch (error) {
     res.status(500).send("Unable to make an entry")
}

   s.status(200).send(`Student ${name} is successfully added`)
   
}

const updateEntry= async (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const {email} = req.body;
try {
     const student = await studentModel.findByPk(id);

    if(!student){
     res.status(404).send("Student not found")
    }
    
    student.name=name;
    await student.save();
    res.status(200).send("Student Updted")
} catch (error) {
    res.status(500).send(error)
}
   

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

const deleteEntry=async  (req,res)=>{
    try {
        const {id} = req.params;
        const student = await studentModel.destroy({
          where:{
          id:id
            }
        })
        if(!student){
     res.status(404).send("Student not found")
    }
     res.status(200).send("Student is deleted")
    } catch (error) {
        res.status(200).send(error.message)
    }
    
}

module.exports={
    addEntries,
    updateEntry,
    deleteEntry,
    showEntries,
    showStudentbyId
}
