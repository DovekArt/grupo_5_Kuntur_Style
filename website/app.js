const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const views = path.join(__dirname, 'views');

app.get('/', (req, res) => {
    res.sendFile(path.join(views, 'index.html'));
});

app.get('/account/login', (req, res) => {
    res.sendFile(path.join(views, 'login.html'));
})

app.get('/account/register', (req, res) => {
    res.sendFile(path.join(views, 'register.html'));
})

app.get('*', (req, res) => {
    res.sendFile(path.join(views, '404.html'));
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})