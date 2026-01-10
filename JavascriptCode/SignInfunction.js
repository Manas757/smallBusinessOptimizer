console.log(">>> Server file loaded");

import pkg from "pg";
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = process.env.PORT || 5050;
const {Client} = pkg;

//Middleware(?)
app.use(cors());
app.use(express.json());

const con = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Aditya23@",
    database: "CustomerDB"
})

con.connect().then(()=>console.log("Connected"))

//Server 

app.post('/api/signup',async(req,res) => {
   const{ username,email,password} = req.body;
   try{
    const userexists = await con.query(
      'SELECT * From BsCustomers where email = $1',
      [email]
    );

    if(userexists.rows.length>0){
      return res.status(400).json({message:"User already Exists"});
    }

    // const hashedpassword  = await bcrypt.hash(password, 10);

    const newUser = await con.query(
      'INSERT into BsCustomers (username, email, password) VALUES ($1, $2, $3) RETURNING * ',
      [username, email, password] 
    )
    res.status(201).json({message: " New user has been added to the database"});
   }

   catch(error){
   console.error('Error:', error );
   res.status(500).json({
    message: 'Server Error'
   })
  }
});

app.listen(port,()=>{
    console.log(`Server is active on port number : ${port}`)
})
