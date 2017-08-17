// server.js
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
console.log('heroku server start');
// server.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static('.' + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
