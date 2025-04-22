db.employees.aggregate([
    {$project:{_id:0,name:1,salary:1,department:1}},
    {$sort:{name:1}},
    {$skip:3},
    {$limit:1}
])

db.employees.aggregate([
    {$group:{_id:"$department",total:{$sum:"$salary"}}}
])

db.employees.aggregate([
    {$project:{_id:0,name:1,skills:1}},
    ])

db.employees.aggregate([
{$project:{_id:0,name:1,skills:1}},
{$unwind:"$skills"}
])

// --->unwind use is ,for each skills name will be going to print(it gets redundancy)

    db.employees.aggregate([
        {$project:{_id:0,
            name:1,
            department:1,
            salaryStr:{$convert:{input:"$salary",to:"int"}},
        },
    },
            {$group:{_id:"department",total:{$sum:"$salaryStr"}}},
        ])
        