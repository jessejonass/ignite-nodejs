const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ ok: true });
});

// http://localhost:PORT
app.listen(3333);
