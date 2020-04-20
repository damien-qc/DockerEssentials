const express = require('express');
const { Pool } = require('pg');
const HOST = '0.0.0.0';
const PORT = 80;
const app = express();

const pool = new Pool({ user:'postgres', host: 'db'});

// if you secured the database in docker-compose.yaml:
// const pool = new Pool({user: 'postgres', password: 'd4REn0LdCH4B', host: 'db'});

app.get('/',(req, res) =>{
    pool.query('SELECT * FROM apparel', (error, response) => {
       res.json(response.rows);
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);