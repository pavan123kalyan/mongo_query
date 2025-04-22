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
//db.employees.updateOne({email:"sriram@gmail.com"},{$set:{salary:2500}})
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

//db.employees.find({$or:[{salary:{$gte:50000},},{department:"CSE"},],});  Here or tells that it retrieve data of salary>=50k or deparment=CSE.
//db.employees.find({$and:[{salary:{$gte:50000},},{department:"CSE"},],}); --> It satisfies both conditions.
// db.employees.find({$nor:[{salary:{$gte:80000},},{department:"CSE"},],});   --> It returns documents that do NOT match any of the conditions inside the array.

//  db.employees.find({
//     department:{$exists:true}
// })  -->It checks department exists or not.

//db.employees.updateMany({},{$set:{org:"Google"}});  --> Org adds to all data 
//db.employees.updateOne({},{$set:{org:"Google"}});  --> Org adds to 1st data only.

//db.employees.find({department:{$in :["CSE","CSM"]}})  --> The $in operator checks if the value of a field matches any value in a given array.
//db.employees.find({department:{$nin :["CSE","CSM"]}})  -->$nin=not in .. This query returns all employees whose department is not "CSE" and not "CSM".
//db.employees.find().explain("executionStats")   --->  
//db.employees.updateOne(
//     {email:"pavan@gmail.com"}, 
//     { $inc: { points: 3 } }
// );  --> increments points by 3 to one data

// db.employees.updateMany(
//     {email:"pavan@gmail.com"}, 
//     { $inc: { points: -3 } }
// );  --> decrements data by 3 to many data which has email as pavan@gmail.com

//db.employees.updateMany(
//     {}, 
//     { $rename: { points:"ratings" } }
// );     ---> Rename points to ratings.

// db.employees.updateMany(
//     {}, 
//     { $set: {test:1}  }
// );   --> It adds test=1 to all data

// db.employees.updateMany(
//     {}, 
//     { $unset: {test:""}  }
// );     --->It removes the set in many data.

//db.employees.updateOne(
//     {email:"pavan@gmail.com"},
//     {$push:{score:4}}
// )      ---> It adds score=4 to same mail.

// db.employees.updateOne(
//     {email:"pavan@gmail.com"},
//     {$pull:{score:4}}
// )    --> It deletes score=4

db.employees.createIndex({email:1})
db.employees.getIndexes()
db.employees.dropIndexes("name_1")

//db.employees.find({name:"Pavan"}).explain("executionStats")
// db.employees.find().explain("executionStats")


db.createCollection("customers",
    {
        validator:{
            
                $jsonSchema:{
                    bsonType:"object",
                    required:["name","email"],
                    properties:{
                        name:{
                            bsonType:"string",
                            description:"must be string and required",
                        },
                    },
                },
        },
    },
)

//Aggregate Pipeline
db.employees.aggregate([
    {$match:{department:"IT"}}
])
// --> It gives details of matching department.

    db.employees.aggregate([
        {$match:{department:"IT"}},
        {$project:{_id:0,name:1,salary:1}}
    ])
//output -->  [ { name: 'siddhu', salary: 99999 } ]

db.employees.aggregate([
    
    {$project:{_id:0,name:1,salary:1}}
])
//output --> [
//   { name: 'Pavan', salary: 95000 },
//   { name: 'siddhu', salary: 99999 },
//   { name: 'sriram', salary: 50000 },
//   { name: 'Hitesh', salary: 50000 }
// ]
//