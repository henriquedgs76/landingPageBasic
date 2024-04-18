const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'dia_das_criancas'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados!');
});

app.post('/formulario', (req, res) => {
    let sql = 'INSERT INTO formulario SET ?';
    let query = db.query(sql, req.body, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Formulário enviado com sucesso!');
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
