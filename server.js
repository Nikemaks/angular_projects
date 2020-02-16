const express = require('express');
const path = required('path');
const app = express();


app.use(express.static(__dirname + '/dist/app-iss'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/app-iss/index.html'))
});

app.listen(process.env.port || 8080);
