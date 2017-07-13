var express = require('express');
var router = express.Router();

var mysql = require('mysql'); // you need to npm install this
var config = require('../config/config.js') // this imports config/config

var connection = mysql.createConnection({ // this is from config/config
	host: config.host, 
	user: config.user,
	password: config.password,
	database: config.database
});

//Actually make a connection
connection.connect()



/* GET home page. */
router.get('/productlines/get', function(req, res, next) {
  const selectQuery = "SELECT * FROM productlines"
  connection.query(selectQuery, (error, results, fields)=>{
  	if(error){
  		res.json(error)
  	}else {
  		res.json(results)
  	}

  })

});


module.exports = router;
