const express = require('express');
const routes = require('./routes/index');
const app = express();
const port = 8080;
const path = require('path');

// Define a route for GET requests to the root URL
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});