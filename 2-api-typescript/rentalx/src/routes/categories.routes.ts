import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router(); // using /categories from server.ts
const categoriesRepository = new CategoriesRepository(); // access, db, etc...

// categories/
categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.list(); // db accesses, etc...

  return response.json({ categories });
});

// categories/
categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const category = categoriesRepository.create({ name, description });

  return response.status(201).json({ category });
});

export { categoriesRoutes };
