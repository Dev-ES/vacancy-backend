import Repository from "./Repository";
import DAO from "./RepositoryDAOPgSql";

class RepositoryService {

  constructor() {}

  newRepository(data): void {
    const repo: Repository = new Repository(data);
    repo.save();
  }

  async getAllRepository(): Promise<Repository[]> {
    /* To do: implementar uso do DAO para obtenção dos dados */
    const repos: Repository[] = await DAO.getAll();
    return repos;
  }
}

export default new RepositoryService();
