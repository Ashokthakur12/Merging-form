// index.js
const express = require('express');
const app = express();

const PORT = 80; // So that IP works without port

// Redirect root to your Google Form
app.get('/', (req, res) => {
  res.redirect('https://docs.google.com/forms/d/e/1FAIpQLScoLWR0blz4Y8ceiz_jrBQjFAhlJwwx7S89XMoOQKawMc6FVg/viewform');
});

app.listen(PORT, () => {
  console.log(`Redirect server running at http://your-ip`);
});


---
