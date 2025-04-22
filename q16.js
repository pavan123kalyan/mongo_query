db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{_id:0,name:1,salary:1}}
])

db.employees.aggregate([
    {$project:{_id:0,name:1,salary:1}}
])

    db.employees.aggregate([
        {$addFields:{Bonus:{$divide:["$salary",2]}},}
    ])

    db.employees.aggregate([
        {$match:{department:"IT"}},
        {$project:{_id:0,name:1,salary:1,Bonus:1}},
        {$addFields:{Bonus:{$multiply:["$salary",2]}},}
    ])
    db.employees.aggregate([
        {
            $project:{
                _id:0,
                name:1,
                salary:1,
                grade:{
                    $cond:[{$gte:["$salary",1000]},
                   "Grade A",
                   "Grade B"],
                    }
            },
        },
    ]);

    db.employees.aggregate([
        {
            $project:{
                _id:0,
                name:1,
                salary:1,
                grade:{
                    $cond:{
                        if:{$gte:["$salary",6000]},
                        then:"Grade A",
                        else:"Grade B",
                    }
                    }
            },
        },
    ]);

    db.employees.aggregate([
        {
            $project:{
                _id:0,
                name:1,
                salary:1,
                grade:{
                    $switch:{
                        branches:[
                            {case:{$gte:["salary",100000]},then:"Grade A"},
                            {case:{$lte:["salary",100000]},then:"Grade B"}],
                            default:"Unknown",
                    }
                    }
            },
        },
    ]);

    db.employees.aggregate([
        {
          $project: {
            _id: 0,
            name: 1,
            salary: 1,
             dept: {
              $switch: {
                branches: [
                  { case: { $eq: ["$department", "IT"] }, then: "Information technology" },
                  { case: { $eq: ["$department", "CSM"] }, then: "AIML students" },
                  { case: { $eq: ["$department", "Admin"] }, then: "Main department" }
                ],
                default: "Other"
              }
            }
          }
        }
      ]);
      
      db.employees.aggregate([
         {
        //     {$match:{department:"CSM"}}
          $project: {
            _id: 0,
            name: 1,
            salary: 1,
             dept: {
              $switch: {
                branches: [
                  { case: { $eq: ["$department", "IT"] }, then: "Information technology" },
                  { case: { $eq: ["$department", "CSM"] }, then: "AIML students" },
                  { case: { $eq: ["$department", "Admin"] }, then: "Main department" }
                ],
                default: "Other"
              }
            }
          }
        }
      ]);
      