import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router(); // using /categories from server.ts
const categoriesRepository = new CategoriesRepository(); // access, db, etc...

// categories/
categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  return response.status(201).json({ success: 'category created' });
});

export { categoriesRoutes };
