db.users.insertMany([
    {
      name: "pavan",
      email: "pavan@email.com",
      pass: "1234",
    },
    {
      name: "kalyan",
      email: "kalyan@email.com",
      pass: "143",
    },
  ]);
  
  
  db.users.find()
  
  db.users.findOne()
  
  db.users.find().limit(2)
  
  db.users.find().skip(1)
  
  db.users.countDocuments()