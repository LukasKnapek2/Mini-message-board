const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

router.get('/new', (req, res) => {
  res.send('GET request to the new message page');
});


module.exports = router;