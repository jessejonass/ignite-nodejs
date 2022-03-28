import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

// service not should know the response (express) type
class CreateCategoryUseCase {
  // ICategoriesRepository: contract/type -> Liskov
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    // const categoriesRepository = new CategoriesRepository(); // DIP

    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error('Category Already Exists');
    // return response.status(400).json({ error: 'category already exists' });

    const category = this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
