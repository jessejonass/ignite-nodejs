import { Router } from 'express';
import multer from 'multer';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const categoriesRoutes = Router(); // using /categories from server.ts

// multer config
const upload = multer({
  dest: './tmp',
});

// categories/
categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

// categories/
categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

// import with multer
categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
