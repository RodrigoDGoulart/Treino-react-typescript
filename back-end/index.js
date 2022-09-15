const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors")

const bancoDados = mysql.createPool({
    host: 'localhost',
    user: 'rodrigo',
    password: 'fatec',
    database: 'treinoreact'
});

app.use(cors());
app.use(express.json());

app.post('/add', (req, res) => {
    const { nome } = req.body;

    let sql = 'INSERT INTO nomes (nome) VALUES (?)'
    bancoDados.query(sql, [nome], 
    (err, result) => {
        console.log(err);
    });
})

app.get('/nomes', (req, res) => {
    let sql = 'SELECT * FROM nomes'
    bancoDados.query(sql, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
});

app.listen(4001, () => {
    console.log('rodando servidor');
});
