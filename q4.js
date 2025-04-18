db.users.insertMany([
    { name: "arya", age: 23 },
    { name: "varun", age: 21, location: "Hyderabad" },
    { name: "vardhan", country: "India" },
  ]);
  
  db.users.find({ name: "arya" });
  
  db.users.find({}, { _id: 0, name: 1 });
  
  db.users.find({}, { _id: false, name: true });
  
  db.users.find(
      { email: "pavan@email.com" }, 
      { _id: false, name: true }
  );

  db.users1.insertMany([{name:"harshith",age:19},{name:"varun",age:20},{name:"arya",age:21},{name:"sailu",age:21}])
  db.users1.updateOne({name:"varun"},{$set:{location:"Hyderabad"}})
  db.users1.find()