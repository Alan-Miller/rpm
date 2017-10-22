const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , { PORT, connection } = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(connection)
.then(db => { app.set('db', db); });

app.get('/api/teachers', (req, res) => {
    app.get('db').getTeachers().then(response => {
        res.status(200).send(response);
    });
});

app.post('/api/teachers', (req, res) => {
    const { newTeacher, newSubject } = req.body;
    app.get('db').addTeacher([newTeacher, newSubject]).then(response => {
        res.status(200).send(response);
    });
});

app.delete('/api/teachers/:id', (req, res) => {
    const { id } = req.params;
    app.get('db').fire([id]).then(response => {
        res.status(200).send(response);
    });
});

app.listen(PORT, _ => { console.log(`Listening on ${PORT}.`); });