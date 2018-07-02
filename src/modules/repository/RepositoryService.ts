import Repository from "./Repository";

class RepositoryService {

  constructor() {}

  newRepository(data): void {
    const repo: Repository = new Repository(data);
    repo.save();
  }

  getAllRepository(): Repository[] {
    /* To do: implementar uso do DAO para obtenção dos dados */
    return [];
  }
}

export default new RepositoryService();
