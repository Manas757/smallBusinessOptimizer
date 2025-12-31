const express = require('express');
const{ Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 5050;


app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',       
  host: 'localhost',
  database: 'BsSignIn', 
  password: 'tiger',
  port: 5432,
});

app.post('/register', async(req,res)=>{
    try{
        const { email, password, state, city, street, ZIPCode, BSCat, username } = req.body;
        const query = `
      INSERT INTO BsUsers (email, password, state, city, street, ZIPCode, BSCat, username) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
      RETURNING *
    `;
    //what it does 
        const newUser = await pool.query(query,[
            email, 
            password, 
            state, 
            city, 
            street, 
            ZIPCode, 
            BSCat,
            username
        ])
        res.json(newUser.rows[0]);
        console.log("New user added to BsUsers table!");
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }

 });

 app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});