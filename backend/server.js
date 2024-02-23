const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (name, email, password) VALUES ?";
    const values = [
        [req.body.name, req.body.email, req.body.password]
    ];
    
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM login WHERE email = ?";
   
    db.query(sql, [email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        if (result.length === 0) {
            return res.status(401).json({ error: "Invalid email" });
        }
        if (result[0].password !== password) {
            return res.status(401).json({ error: "Invalid password" });
        }
       
     return res.status(200).json({ message: "User logged in successfully" });
    });
});


app.post('/admin/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
    const values = [email, password];
   
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        if (result.length === 0) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        return res.status(200).json({ message: "Admin logged in successfully" });
    });
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.json(data);
    });
});

app.post('/create', (req, res) => {
    const { name, email,usn,age } = req.body; // Destructure name and email from the request body
    const sql = "INSERT INTO student (Name, Email,Usn,Age) VALUES (?, ?,?,?)"; // Corrected SQL query
    const values = [name, email,usn,age]; // Values to be inserted into the database

    db.query(sql, values, (err, result) => { // Use values instead of [values]
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        console.log("New student added:", result.insertId); // Log the ID of the newly inserted student
        return res.json({ message: "Student added successfully" });
    });
});

app.put('/update/:id', (req, res) => {
     // Destructure name and email from the request body
    const sql = "UPDATE student SET name=?, email=?,usn=?,age=? WHERE id=?"; 
    const values=[
        req.body.name,
        req.body.email,
        req.body.usn,
        req.body.age

    ]
    const id = req.params.id; // Retrieve ID from route parameters

    db.query(sql, [...values, id], (err, data) => { // Pass ID as part of the query values
        if (err) return res.json("Error");
        return res.json(data);
    });
});


app.delete('/student/:id', (req, res) => {
    // Destructure name and email from the request body
   const sql = "DELETE FROM student WHERE id=?"; 
   
   const id = req.params.id; // Retrieve ID from route parameters

   db.query(sql, [id], (err, data) => { // Pass ID as part of the query values
       if (err) return res.json("Error");
       return res.json(data);
   });
});

app.get('/student/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM student WHERE id = ?";
    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        if (data.length === 0) {
            return res.status(404).json({ error: "Student not found" });
        }
        return res.json(data[0]);
    });
});





app.listen(8081, () => {
    console.log("Listening on port 8081");
});
