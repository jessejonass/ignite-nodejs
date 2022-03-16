import { CategoriesRepository } from '../repositories/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

/**
 * [x] define return type
 * [x] change return error
 * [x] access repository
 */

// service not should know the response type

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    // const categoriesRepository = new CategoriesRepository(); // DIP

    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error('Category Already Exists');
    // return response.status(400).json({ error: 'category already exists' });

    const category = this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
