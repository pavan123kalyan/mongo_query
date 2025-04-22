db.users.deleteOne({ name: "pavan" });

db.employees.drop();

    db.employees.insertOne({
          name:'siddhu',
          email:'siddhu@gmail.com',
          address:{city:"Dundigal",state:'TG'},
          department:'IT',
          salary:99999,
          score:[6,2,6,4],
        skills:["python","DSA","Reactjs","MongoDB"],
        date:Date(),
      });

   db.employees.insertOne({
       name:'sriram',
         email:'sriram@gmail.com',
         address:{city:"Nagole",state:'Telangana'},
         department:'CSM',
         salary:50000,
         score:[9,6,7,4],
         skills:["python","DSA","Reactjs","MongoDB","ML"],
         date:Date()
     })

     db.employees.insertOne({
           name:'Hitesh',
           email:'athi@gmail.com',
           address:{city:"Nagole",state:'Telangana'},
           department:'Admin',
           salary:50000,
           score:[9,6],
           skills:["python","MongoDB"],
           date:Date()
       })
  
