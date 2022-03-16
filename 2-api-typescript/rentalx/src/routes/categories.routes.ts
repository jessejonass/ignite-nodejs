import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

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

  // using single responsability principle
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
