const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/examen_parcial'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/examen_parcial/index.html'));
});


///servidor en el puerto 5000
app.listen(process.env.PORT || 5000);
