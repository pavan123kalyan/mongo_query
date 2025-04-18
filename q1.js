// type mongosh in command prompt
// show dbs;
// use mydb;
// show collections;
// db.createCollection("products")  Creates a collection
// show collections;
//db.products.updateMany({},{$set:{price:1000}})
// db.Product.renameCollection("fruits")  It change the existed name of collection.
// db.users.countDocuments();  It counts the no.of data 
// db.users.find().limit(1)   It retrieves only 1 data
// db.users.find({name:"pavan"})  It retrieve the details(id's & remaining created columns) related to pavan in the created collection.
//db.users.find({},{name:1});  It retrieve id's and all existed names.
//db.users.find({},{_id:false,name:true,email:1});   It retrieve the name,email,id .Here 1 works same as true.

//db.employees.insertOne({
// ...     name:'sriram',
// ...     email:'sriram@gmail.com',
// ...     address:{city:"Nagole",state:'Telangana'},
// ...     department:'CSM',
// ...     salary:50000,
// ...     score:[9,6,7,4],
// ...     skills:["python","DSA","Reactjs","MongoDB","ML"],
// ...     date:Date()
// ... })

//db.employees.find().sort({name:-1}) It sorts in reverse order wrto names.
// db.employees.find().sort({name:1})
//db.employees.find({},{_id:0,name:1,salary:1}).sort({salary:-1}) sorts in descending order.
// db.employees.find({},{_id:0,name:1,salary:1}).sort({salary:1}) sorts in ascending order.
//
//db.employees.find({"address.city":"nagole"});  It retrieve id and cities.

// db.employees.find({skills:"Java"})  It retrieve data who have java skill.
// db.employees.find().skip(1);  It skips 1st data.
