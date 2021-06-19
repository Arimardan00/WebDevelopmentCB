const mysql = require("mysql2");

const insert = {
  name: process.argv[2],
  age: parseInt(process.argv[3]),
  city: process.argv[4]
}

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'mytestdb',
  user: 'myuser',
  password: 'mypass'
})

connection.query(
  `INSERT INTO persons (name, age, city) VALUES(
    '${insert.name}',
    '${insert.age}',
    '${insert.city}'
  )`,
  function(err, res){
    if(err){
      console.error(err);
    }else{
      console.log(res);
      console.log("Inserted Successfully");
    }
    connection.close();
  }
)