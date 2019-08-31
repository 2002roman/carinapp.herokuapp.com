var express = require('express');
var app = express();

const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'aoarpgboekmezt',
  host: 'ec2-23-21-148-223.compute-1.amazonaws.com',
  database: 'db1koekpfjahur',
  password: '0199b9b831c2d2ce5b7cd4404e358ffa23009a61993904586b512d45f8c92692',
  port: 5432
})

app.get('/',function(req,res){
	pool.query('CREATE TABLE Persons (\
	    PersonID int,\
	    LastName varchar(255)\
	)', (err, res) => {
	  console.log(err, res)
	  pool.end()
	})
	res.send("okoko");
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
// console.log(res.rows[0].message) // Hello world!
// await client.end()
