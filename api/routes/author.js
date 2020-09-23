var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET users listing. */
// get a author's information: the username, the description, images, and all their posts. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/about', function(req, res) {

});

// Figure out what this next is used for
// guessing redirect
// Change the params address to something useful

// Update user infomation 
router.put('/', function(req, res, next){
  res.send("respond")
});

// Cancel an author account 
router.delete('/', function(req, res){
  res.send('About something')
})



module.exports = router;
