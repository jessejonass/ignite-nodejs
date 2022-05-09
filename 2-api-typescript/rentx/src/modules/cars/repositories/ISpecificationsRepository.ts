import { Specification } from '../model/Specification';

interface ICreateSpecificatioDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificatioDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificatioDTO };
