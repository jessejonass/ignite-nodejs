import { Specification } from '../entities/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificatioDTO,
} from './ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificatioDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      // id: uuidv4(), // created id on model
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      specification => specification.name === name,
    );

    return specification;
  }
}

export { SpecificationsRepository };
