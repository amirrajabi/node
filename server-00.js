const express = require('express');
const hbs = require('hbs');
const path = require('path');
const fs = require('fs');

const app = express();

app.set('view engine', 'hbs');


app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now} : ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('serve.log', log + '\n', (err) => {
        console.log(err)
    });
    next();
});

// app.use((req, res, next) => {
//     res.render('404.hbs')
// });

app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(path.join(__dirname, 'views/partials'));
hbs.registerHelper('date', () => {
    return new Date().getFullYear();
})
hbs.registerHelper('uppercase', (text) => {
    return text.toUpperCase();
})


app.get('/', (req, res) => {
    // res.send('welcome to my website');
    res.render('home', {
        pageTitle: 'Home Page',
        title: 'Learning NodeJS'
    })
});

app.get('/api/list', (req, res) => {
    res.send('Amir')
})

app.listen(3030, () => {
    console.log('Server is running on port 3030...');
});