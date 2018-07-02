import PostgreSQL from "./../../utils/PostgreSQL";
import Repository from "./Repository";
import RepositoryDAO from "./RepositoryDAO";
import { QueryResult } from "pg";

class RepositoryDAOPgSql implements RepositoryDAO {
  private db: PostgreSQL;

  constructor() {
    this.db = PostgreSQL.getInstance();
  }

  insert<Repository>(repo: Repository): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  get<Repository>(repoId: number): Promise<Repository> {
    throw new Error("Method not implemented.");
  }

  getAll<Repository>(): Promise<Repository[]> {
    throw new Error("Method not implemented.");
  }

  update<Repository>(repo: Repository): Promise<Repository> {
    throw new Error("Method not implemented.");
  }

  delete<Repository>(repoId: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

export default new RepositoryDAOPgSql();
