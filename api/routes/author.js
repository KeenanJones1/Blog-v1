var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET users listing. */
// get a author's information: the username, the description, images, and all their posts. 
router.get('/', function(req, res, next) {
  // this should be an about page for me. 
  // My description and other info
  // Have all of my articles 
  // No editing besides me

  
});


// res.sendFile(__dirname + '/index.html')



module.exports = router;
