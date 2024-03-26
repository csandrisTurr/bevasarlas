require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite3');

const app = express();
const port = process.env.PORT;

const pool = new sqlite.Database('db.sqlite3');

pool.on('connection', function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// MIDDLEWARES 
app.use(express.urlencoded({extended: true}));
app.use(cors())
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
    pool.all(`SELECT * FROM mock_data`, (error, results) => {
        if (error) res.status(500).send(error);
        res.status(200).send(results);
    });
});

// GET one employee by PK
/*app.get('/employees/:pk', (req, res)=>{
    let pk = req.params.pk;
    pool.run(`SELECT * FROM employees WHERE ID=?`, pk, (error, results) => {
        if (error) res.status(500).send(error);
        res.status(200).send(results);
    });
});*/

// POST new employee
app.post('/bevasarlolistaAdat', (req, res)=>{
    let data = req.body;
    pool.run(`INSERT INTO mock_data VALUES(null, '${data.category}', '${data.productname}', '${data.price}')`, (error, results) => {
        if (error) res.status(500).send(error);
        res.status(200).send(results);
    });
});

// PATCH one employee by PK
/*
app.patch('/employees/:pk', (req, res)=>{
    let pk = req.params.pk;
    let data = req.body;
    pool.run(`UPDATE employees SET name='${data.name}', address='${data.address}', phone='${data.phone}', email='${data.email}', post='${data.post}', price=${data.price} WHERE ID=?`, pk, (error, results) => {
        if (error) res.status(500).send(error);
        res.status(200).send(results);
    });
});
*/

// DELETE one employee by PK
/*
app.delete('/employees/:pk', (req, res)=>{
    let pk = req.params.pk;
    pool.run(`DELETE FROM employees WHERE ID=?`, pk, (error, results) => {
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
