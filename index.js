const express = require('express')
const ejs = require('ejs');
const app = express()
const port = 3000

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})