const PORT = 3333;
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const customers = [];

/**
 * id: uuid;
 * cpf: string;
 * name: string;
 * statement: [];
 */
app.post('/account', (request, response) => {
  // don't create with existing cpf
  const { cpf, name } = request.body;
  const id = uuidv4();

  customers.push({
    id,
    cpf,
    name,
    statement: [],
  });

  return response.status(201).send(customers);
});

app.listen(PORT, () => {
  console.log(`\u001b[36m| server running on port: ${PORT} |`);
});
