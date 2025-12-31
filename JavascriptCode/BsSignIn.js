import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "tiger",
  database: "BsSignIn",
  port: 5432,
});

client.connect();

// client.query(
//   `CREATE TABLE BsUsers(
//       id SERIAL PRIMARY KEY,
//       email VARCHAR(255) UNIQUE NOT NULL,
//       password VARCHAR(255) NOT NULL, 
//       state VARCHAR(255),
//       city VARCHAR(255),
//       street VARCHAR(255),
//       ZIPCode VARCHAR(20),
//       BSCat VARCHAR(255)
//    )`, 
//   (err) => {
//     if (err) console.log(err);
//     else console.log("Table created");
//     client.end(); 
//   }
// );

// client.query(
//   `ALTER TABLE BsUsers 
//    ADD username VARCHAR(20)`, 
//   (err) => {
//     if (err) {
//       console.error("Error adding column:", err);
//     } else {
//       console.log("Column added successfully!");
//     }
//     client.end();
//   }
// );

client.query(
  `ALTER TABLE BSUsers
DROP COLUMN phone;`,
  (err)=>{
    if (err) {
      console.error("ERRor Deleting",err);
    }
    else{
      console.log("coloumn Deleted")
    }
    client.end();
    }
)