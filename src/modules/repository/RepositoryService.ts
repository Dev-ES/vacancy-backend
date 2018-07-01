import Repository from "./Repository";

class RepositoryService {
  constructor() {}

  newRepository(data): void {
    const repo: Repository = new Repository(data);
    repo.save();
  }

  getAllRepository(): Array<Repository> {
    const data: Array<Repository> = new Array<Repository>();
    data.push(new Repository({id: 0, nome: "zé", url: "teste"})); // teste - apagar
    return data;
  }
}

export default new RepositoryService();
