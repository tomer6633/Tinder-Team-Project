import express from "express";
const app = express();
const mysql = require('mysql');
app.use(express.json());

//static file
app.use(express.static('./client'));
import * as dotenv from "dotenv";
dotenv.config();




const SQLpass = process.env.PASSWORDSQL
const connection = mysql.createConnection({
  host: 'localhost',
  port: "3306",
  user: 'root',
  password: SQLpass,
  database: 'mydb'
});

connection.connect(
    console.log("connected success")
);