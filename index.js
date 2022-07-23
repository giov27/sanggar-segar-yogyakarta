const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


// use res.render to load up an ejs view file

// index page
app.get('/', (req, res) => {
    res.render('pages/index');
});

// about page
app.get('/tentang', (req, res) => {
    res.render('pages/about');
});

// membership page
app.get('/membership', (req, res) => {
    res.render('pages/membership');
});

// instructur page
app.get('/instruktur', (req, res) => {
    res.render('pages/instructur');
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
