import { Router } from 'express';

import { Category } from '../model/Category'; // model | type

const categoriesRoutes = Router(); // using /categories from server.ts

const categories: Category[] = [];

// categories/
categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  // instantiate to run constructor (with ID)
  const category = new Category(); //

  Object.assign(category, {
    // id: uuidv4(), // create id on model
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).json({ categories });
});

export { categoriesRoutes };
