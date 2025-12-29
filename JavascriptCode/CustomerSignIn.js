import pkg from "pg";

const {Client} = pkg;

const con = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Aditya23@",
    database: "CustomerDB"
})

con.connect().then(()=>console.log("Connected"))

con.query(
  `CREATE TABLE BsCustomers(
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
   )`, 
   (err) => {
    if (err) console.log(err);
    else console.log("Table created");
    con.end(); 
  }
);