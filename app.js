const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.send('Hello World!\n');
 });

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

let users = [
  {
    id: 1,
    name: 'alice'
  },
  {
    id: 2,
    name: 'bek'
  },
  {
    id: 3,
    name: 'chris'
  }
]