import { Category } from '../model/Category'; // model | type
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

// using the contract / interface / implementation
class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = [];

  constructor() {
    this.categories = [];
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);

    return category;
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    // instantiate to run constructor from model (with ID)
    const category = new Category(); //

    Object.assign(category, {
      // id: uuidv4(), // created id on model
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
    return category;
  }
}

export { CategoriesRepository };
