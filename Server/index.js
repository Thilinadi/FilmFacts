const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/moviedata', (req, res) => {
  http.get('http://localhost:3005/movies', (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      res.send(JSON.parse(data));
    });
  }).on('error', (err) => {
    console.log(`Error: ${err.message}`);
    res.status(500).send('Internal Server Error');
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
