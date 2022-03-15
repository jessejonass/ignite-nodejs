import { Category } from '../model/Category'; // model | type

// DTO - Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[] = [];

  constructor() {
    this.categories = [];
  }

  // list all
  list(): Category[] {
    return this.categories;
  }

  // list by name
  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);

    return category;
  }

  // create new category
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
