db.employees.find()
db.employees.find({name:"sriram"}).explain("executionStats")
db.employees.find({name:1}).explain("executionStats")

db.employees.createIndex({email:1})
db.employees.getIndexes()
db.employees.dropIndexes("name_1")
