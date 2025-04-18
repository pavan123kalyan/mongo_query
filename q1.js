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
//db.employees.find({"address.state":"Telangana"}) It retrieve all data related to Telangana
// .
// db.employees.find({skills:"Java"})  It retrieve data who have java skill.
// db.employees.find().skip(1);  It skips 1st data.

// db.users1.updateOne({name:"varun"},{$set:{location:"Hyderabad"}})  It adds new column location.
//db.users1.updateMany({name:{$in:["arya","sailu"]}},{$set:{location:"Bangalore"}})

//db.users1.find({name:"arya"})  Here {} this brackets mandatory.
//db.users1.find({email:"vijay@gmail.com"},{_id:false,name:1})      It retrieve name with help of email.


//db.users1.deleteOne({name:"arya"})    It deletes data related to arya.
//db.employees.deleteMany({ department: "test" }); It deletes all data related to department as test.
// db.users1.drop();   It deletes the entire data in users1.

//db.employees.find({department:"CSE"})
//db.employees.find({department:{$eq:"CSE"}})  --> Both are same,eq==equal
//db.employees.find({salary:{$gt:50000}})    --> It retrieve data who has salary more than 50k,gt=greater than.

// db.employees.find({salary:{$lt:100000}})   --> lt=less than.
//db.employees.find({salary:{$lte:50000}})   --> lte=Less than equal to.
//db.employees.find({salary:{$gte:50000}})   --> gte=greater than equal to.

//db.employees.find({
//     salary: { $gte: 50000 },
//     department: "CSE",
//   });

//db.employees.updateOne(
//     {email:"pavan@gmail.com"}, 
//     { $inc: { points: 3 } }
// );  --> increments points by 3 to one data

// db.employees.updateMany(
//     {email:"pavan@gmail.com"}, 
//     { $inc: { points: -3 } }
// );  --> decrements data by 3 to many data which has email as pavan@gmail.com

