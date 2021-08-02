var path = require('path');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
  // res.sendFile(path.resolve('src/client/views/index.html'));
});

app.get('/key', function (req, res) {
  res.send(process.env.API_KEY);
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
