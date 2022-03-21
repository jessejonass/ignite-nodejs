import { Category } from '../model/Category';

// DTO - Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// what should my repository have
// implements on repository
interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
