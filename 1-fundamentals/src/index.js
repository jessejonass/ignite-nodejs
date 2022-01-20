const express = require('express');

const app = express();
app.use(express.json());

const PORT = 3333;

app.get('/courses', (request, response) => {
  // http://localhost:3333/courses?page=2 // query params
  const query = request.query;
  console.log(query); // { page: '2' }

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
  const body = request.body; // body params
  console.log(body);

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
  const { id } = request.params; // route params
  console.log(id);

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
