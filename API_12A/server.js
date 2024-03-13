require('dotenv').config();
const express = require('express');
var mysql = require('mysql');
const app = express();
const port = process.env.PORT;

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.DBHOST,
    user            : process.env.DBUSER,
    password        : process.env.DBPASS,
    database        : process.env.DBNAME
});

// MIDDLEWARES 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Backend API from BSZC Türr István Technikum - 12.A szoftverfejlesztő');
});

// ---------------------------
//  ENDPOINTS 
// ---------------------------

// Bevasarlolista
// ------------------------------------------
// GET all employees
app.get('/bevasarlolista', (req, res)=>{
    pool.query(`SELECT * FROM mock_data`, (error, results) => {
        if (error) res.status(500).send(error);
        res.status(200).send(results);
    });
});

// GET one employee by PK
/*app.get('/employees/:pk', (req, res)=>{
    let pk = req.params.pk;
    pool.query(`SELECT * FROM employees WHERE ID=?`, pk, (error, results) => {
        if (error) res.status(500).send(error);
        res.status(200).send(results);
    });
});*/

// POST new employee
app.post('/bevasarlolistaAdat', (req, res)=>{
    let data = req.body;
    pool.query(`INSERT INTO mock_data VALUES(null, '${data.category}', '${data.productname}', '${data.price}')`, (error, results) => {
        if (error) res.status(500).send(error);
        res.status(200).send(results);
    });
});

// PATCH one employee by PK
/*
app.patch('/employees/:pk', (req, res)=>{
    let pk = req.params.pk;
    let data = req.body;
    pool.query(`UPDATE employees SET name='${data.name}', address='${data.address}', phone='${data.phone}', email='${data.email}', post='${data.post}', price=${data.price} WHERE ID=?`, pk, (error, results) => {
        if (error) res.status(500).send(error);
        res.status(200).send(results);
    });
});
*/

// DELETE one employee by PK
/*
app.delete('/employees/:pk', (req, res)=>{
    let pk = req.params.pk;
    pool.query(`DELETE FROM employees WHERE ID=?`, pk, (error, results) => {
        if (error) res.status(500).send(error);
        res.status(200).send(results);
    });
});
*/

// Worktimes table
// ------------------------------------------
// GET all Worktimes  <----
// GET all Worktimes Between dates  XXX

// GET all Worktimes by employee (ID) <----
// GET all Worktimes by employee between dates XXX

// POST new Worktimes <----
// PATCH one Worktimes by PK <----
// DELETE one Worktimes by PK <----


app.listen(port, ()=>{
    console.log(`Server hallgatozik on port: ${port}...`);
});