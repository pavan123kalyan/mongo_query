db.employees.insertMany([
    { name: "arya", department: "CSE" },
    { name: "varun", department: "CSE" },
    { name: "vardhan", department: "CSE" },
  ]);
  
  db.employees.deleteOne({ department: "CSE" });
  
  db.employees.deleteMany({ department: "CSE" });