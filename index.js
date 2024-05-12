const express = require('express')
const ejs = require('ejs');
const { tripathi_labs, ppc, ipp, skills, imageArrays } = require('./content-data');
const app = express()
const port = 3000

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Render the Home Page
app.get('/', (req, res) => {
  res.render('home', {tripathi_labs, ppc, ipp, skills, imageArrays});
})

app.listen(port, () => {
  console.log(`Stephanie DaCruz's Portfolio listening on port ${port}`)
})