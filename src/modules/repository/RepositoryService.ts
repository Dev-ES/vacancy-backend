import Repository from "./Repository";
import DAO from "./RepositoryDAOPgSql";

class RepositoryService {

  constructor() {}

  async newRepository(data): Promise<void> {
    const repo: Repository = new Repository(data);
    await repo.save();
  }

  async getAllRepository(): Promise<Repository[]> {
    const repos: Repository[] = await DAO.getAll();
    return repos;
  }
}

export default new RepositoryService();
