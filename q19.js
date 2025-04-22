db.posts.aggregate([
    {$lookup:{
        from:"authors",
        localField:"authorId",
        foreignField:"_id",
        as:"author"

    }}
])
//project stands for projection.
db.posts.aggregate([
    {
      $lookup: {
        from: "authors",
        localField: "authorId",
        foreignField: "_id",
        as: "author"
      }
    },
    {
      $project: {_id: 0,title: 1,description: 1,"author.name":1}
    }
  ]);
  
Title,Description,author
