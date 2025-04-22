db.posts.insertOne({
    title:"Legends",
    description:"MERN STACK IS IMPORTANT",
    author:{
        name:"pavan",
        email:"paidipellipavan@gmail.com"
    }
})
db.posts.insertOne({
    title:"Legends1",
    description:"MERN STACK IS IMPORTANT title 2",
    author:{
        name:"pavan",
        email:"paidipellipavan@gmail.com"
    }
})
db.posts.insertOne({
    title:"Legends",
    description:"MERN STACK IS IMPORTANT",
    author:{
        name:"kalyan",
        email:"kalyan@gmail.com"
    }
})
db.posts.insertOne({
    title:"Legends1",
    description:"MERN STACK IS IMPORTANT title 2",
    author:{
        name:"kalyan",
        email:"kalyan@gmail.com"
    }
})
db.posts.find();
db.posts.find({},{author:{name:"kalyan"}});
db.posts.find({},)

db.posts.find({"author.email":"kalyan@gmail.com"},{_id:0,"author.name":1,title:1,description:1});
//displays name,title,description which have email as kalyan@gmail.com.
//need lookup operator

db.authors.insertOne({
    name:"pavan",
    email:"pavan@gmail.com"

})
db.posts.insertOne({
    title:"This is title 1",
    description:"Description of title 1",
    authorId:ObjectId('680718496d05d7ceabb5f89d')
})

//schema validation
//db.createCollection("customers",{validator:{}})
db.createCollection("customers",
    {
        validator:{
            
                $jsonSchema:{
                    bsonType:"object",
                    required:["name","email"],
                    properties:{
                        name:{
                            bsonType:"string",
                            description:"must be string and required",
                        },
                    },
                },
        },
    },
)

db.customers.insertOne({
    name:"pavan",
    age:22,
    email:"pavan@gmail.com"
})
db.customers.insertOne({
    name:12,
    age:22,
    email:"pavan@gmail.com"
})