const express = require('express');

const app = express();
app.use(express.json());

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`\u001b[36m| server running on port: ${PORT} |`);
});
