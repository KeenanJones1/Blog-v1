const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')


// Get, Post, Patch and Delete 
router.get('/', function(req, res, next){

 res.send('Hello from posts');
});

router.get('/specific', (req, res) => {
 res.send('Specific Post')
})


// Create, Read, Update, Destory

module.exports = router;