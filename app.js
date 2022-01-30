const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../static/views'));

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/form', (req, res) => {
    res.render('form');
})

app.post('/formdata', (req, res) => {
    const { fname, lname, email } = req.body;
    res.render('formdata', { fname, lname, email });
})

app.post('/jsondata', (req, res) => {
    const { name, job, exp } = req.body;
    res.render('jsondata', { name, job, exp });
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000')
});