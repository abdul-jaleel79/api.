const express = require('express');
const app = express();
const port = 3000;

const users = [
  {
    name: 'John Doe',
    age: 25
  },
  {
    name: 'Jane Smith',
    age: 30
  },
  {
    name: 'Billy Bob',
    age: 22
  }
];

app.get('/getallusers', (req, res) => {
  res.send(users);  
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});