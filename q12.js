db.employees.updateOne(
    {email:"pavan@gmail.com"},
    {$push:{score:4}}
)

db.employees.updateOne(
    {email:"pavan@gmail.com"},
    {$pull:{score:4}}
)

db.employees.updateMany(
    {},
    {$addToSet:{skills:"Python"}}
)

db.employees.updateMany(
    {},
    {$pop:{score:1}}
)

db.employees.updateMany(
    {},
    {$pop:{score:-1}}
)