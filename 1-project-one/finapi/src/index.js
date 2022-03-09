const PORT = 3333;
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());
// app.use(middleware); // use middleware to all routes

const customers = [];

// middlware
function verifyIfExistsAccountCpf(request, response, next) {
  const { cpf } = request.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(400).json({ Error: 'Customer not found' });
  }

  request.customer = customer; // get in routes
  return next();
}

// função para pegar saldo que tenho em conta
function getBalance(statement) {
  // pega todos os valores (entrada ou saída) e transforma em um só
  return statement.reduce((acc, operation) => {
    if (operation.type === 'credit') {
      return acc + operation.amount;
    } else if (operation.type === 'debit') {
      return acc - operation.amount;
    }
  }, 0); // valor inicial do reduce
}

// create account
app.post('/account', (request, response) => {
  const { cpf, name } = request.body;

  // some cliente with this cpf => return boolean
  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists)
    return response.status(400).json({ Error: 'Customer already exists' });

  customers.push({
    id: uuidv4(),
    cpf,
    name,
    statement: [],
  });

  return response.status(201).json(customers);
});

// get customer statement by cpf
app.get('/statement', verifyIfExistsAccountCpf, (request, response) => {
  const { customer } = request; // customer from middleware

  return response.json(customer.statement);
});

// to do deposit
app.post('/deposit', verifyIfExistsAccountCpf, (request, response) => {
  const { description, amount } = request.body;
  const { customer } = request; // using middleware customer | request

  const statementOperation = {
    description,
    amount,
    type: 'credit',
    created_at: new Date(),
  };

  customer.statement.push(statementOperation);

  return response.status(201).json(statementOperation);
});

// withdraw | saque
app.post('/withdraw', verifyIfExistsAccountCpf, (request, response) => {
  const { amount } = request.body;
  const { customer } = request; // using middleware customer | request

  const balance = getBalance(customer.statement);

  if (balance < amount)
    return response.status(400).json({ Error: 'Insufficient funds' });

  const statementOperation = {
    amount,
    type: 'debit',
    created_at: new Date(),
  };

  customer.statement.push(statementOperation);
  return response.status(201).json(statementOperation);
});

// server
app.listen(PORT, () => {
  console.log(`\u001b[36m| server running on port: ${PORT} |`);
});
