const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const index = require('./routes/indexRoutes');
const app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


// use res.render to load up an ejs view file

// index page
app.use(index)
// app.get('/', (req, res) => {
//     res.render('pages/index');
// });

// about page
// app.get('/tentang', (req, res) => {
//     res.render('pages/about');
// });

// membership page
// app.get('/membership', (req, res) => {
//     res.render('pages/membership');
// });

// instructur page
// app.get('/instruktur', (req, res) => {
//     res.render('pages/instructur');
// });


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
