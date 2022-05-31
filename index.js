const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', (req, res) => {
    res.render('pages/index');
});

// about page
app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
