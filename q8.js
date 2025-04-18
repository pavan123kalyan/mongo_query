db.employees.find(
    {department:"CSE"}
)

db.employees.find(
    {department:{$eq:"CSE"}}
)

db.employees.find(
    {salary:{$eq:50000}}
)

db.employees.find(
    {salary:{$gt:50000}}
)

db.employees.find(
    {salary:{$lt:50000}}
)

db.employees.find(
    {salary:{$lte:50000}}
)

db.employees.find(
    {salary:{$gte:50000}}
)