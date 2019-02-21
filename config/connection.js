require('dotenv').config();

const mysql = require("mysql");
let db;

if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: process.env.PASS,
    database: process.env.DB
  });
}

db.connect(error => {
  if (error) throw error;
  console.log("You have sucessfully conencted into the database!");
});

module.exports = db;