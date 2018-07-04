import DAOPgSql from "./RepositoryDAOPgSql";

class Repository {
  public readonly id: number;
  public readonly name: string;
  public readonly url: string;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.url = data.url;
  }

  async save(): Promise<void> {
    if (this.id) {
      await DAOPgSql.update(this);
      return;
    }
    await DAOPgSql.insert(this);
  }
}

export default Repository;
