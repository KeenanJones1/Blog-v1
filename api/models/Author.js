const mongoose = require('mongoose')

const Author = mongoose.Schema({
 username: String,
 posts: [mongoose.Types.ObjectId],
 description: String,

})

