'use strict';
const express = require('express');
const http = require('http');
const port = 8080;
const host = '0.0.0.0';
const app = express();

app.get('/', (req, res) => {
  http.get('http://service-b:8081/api', (resp) => {
    let data = [];

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      res.send('All titles that could be found:<br />' + JSON.parse(data).map(item => `- ${item.title}<br />`).join(''));
    });

  }).on("error", (err) => {
    res.send("Error: " + err.message);
  });

});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);