import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router(); // using /categories from server.ts

// categories/
categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

// categories/
categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

export { categoriesRoutes };
