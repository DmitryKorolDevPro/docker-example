'use strict';
const express = require('express');

const port = 8081;
const host = '0.0.0.0';

const app = express();
 
const FakeDB = require('fake-db');
const db = new FakeDB([
    {title: 'foo'},
    {title: 'bar'}
]);

app.get('/api', (req, res) => {
  db.getCollection().then(function(collection) {
    res.json(collection);
  });
  // res.send('Hello World, service');
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);




// 'use strict';


 
// app.get('/api/todos', function(req, res) {
//   db.getCollection().then(function(collection) {
//     res.json(collection);
//   });
// });
 
// app.listen(8081);