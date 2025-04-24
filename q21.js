db.createView("empView","employees",[
    {$match:{email:"pavan@gmail.com"}}
])

db.empView.find()
