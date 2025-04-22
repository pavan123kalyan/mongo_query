db.employees.find({
    name:"siddhu"
},{_id:0,name:1,salary:1})
//Regular Expression

db.employees.find({
    name:{$regex:"siddhu"}
},{_id:0,name:1,salary:1})

db.employees.find({
    name:{$regex:"^c",$options:"i"}
},{_id:0,name:1,salary:1})
