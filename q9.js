db.employees.find({
    salary: { $gte: 50000 },
    department: "CSE",
  });
  
  db.employees.find({
    $or: [
      {
        salary: { $gte: 50000 },
      },
      { department: "CSE" },
    ],
  });
  
  db.employees.find({
    $and: [
      {
        salary: { $gte: 50000 },
      },
      { department: "CSE" },
    ],
  });
  
  db.employees.find({ c1 });
  db.employees.find({ c1, c2 });
  db.employees.find({ $or: [{ c1 }, { c2 }] });
  db.employees.find({ $and: [{ c1 }, { c2 }] });
  
  db.employees.find({
    $nor: [
      {
        salary: { $gte: 50000 },
      },
      { department: "CSE" },
    ],
  });
  
  db.employees.find(
      { department: { $ne: "CSE" } });
  
  db.employees.insertOne({
      name:"arya",
      email:"arya@email.com"
  })
  
  db.employees.find({
      department:{$exists:false}
  })
