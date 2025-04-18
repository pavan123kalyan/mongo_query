
db.products.insertOne({
    name: "pavan",
    email: "pavan@email.com",
    pass: "1432",
  });
  db.products.find();
  
  db.products.renameCollection("users")
  
  db.users.find();