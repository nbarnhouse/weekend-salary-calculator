const express = require('express');

const app = express();
const PORT = 5002;

app.use(express.static('server/public'));

app.listen(5002, () => {
    console.log('listening on port', PORT);
  });