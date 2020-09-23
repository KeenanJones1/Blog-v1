const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')


 const PostSchema = mongoose.Schema({
  title: {
   type: String,
   required: true,
  }, 
  body: {
   type: String,

  },
  featured: Boolean,
  like_count: Number,
  author_id: ObjectId,
  published: {
   type: Boolean,
   required: true,
   default: false,
  },
  
 })

 module.exports = mongoose.model("Posts", PostSchema);