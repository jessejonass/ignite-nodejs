const express = require('express');

const app = express();
const PORT = 3333;

app.get('/courses', (request, response) => {
  const data = [
    {
      id: 1,
      name: 'ReactJS',
    },
    {
      id: 2,
      name: 'PHP',
    },
  ];

  return response.json(data);
});

app.post('/courses', (request, response) => {
  const data = [
    {
      id: 1,
      name: 'ReactJS',
    },
    {
      id: 2,
      name: 'PHP',
    },
    {
      id: 3,
      name: 'Haskell',
    },
  ];

  return response.json(data);
});

app.put('/courses/:id', (request, response) => {
  const data = [
    {
      id: 1,
      name: 'ReactJS',
    },
    {
      id: 2,
      name: 'PHP',
    },
    {
      id: 3,
      name: 'Pearl',
    },
  ];

  return response.json(data);
});

app.patch('/courses/:id', (request, response) => {
  const data = [
    {
      id: 1,
      name: 'ReactJS',
    },
    {
      id: 2,
      name: 'PHP',
    },
    {
      id: 3,
      name: 'Perl',
    },
  ];

  return response.json(data);
});

app.delete('/courses/:id', (request, response) => {
  const data = [
    {
      id: 1,
      name: 'ReactJS',
    },
    {
      id: 2,
      name: 'PHP',
    },
  ];

  return response.json(data);
});

app.listen(PORT, () => {
  console.log(`\u001b[36m| server running on port: ${PORT} |`);
});
