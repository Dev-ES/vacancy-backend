import PostgreSQL from "./../../utils/PostgreSQL";
import Repository from "./Repository";
import RepositoryDAO from "./RepositoryDAO";
import { QueryResult } from "pg";

class RepositoryDAOPgSql implements RepositoryDAO {
  private db: PostgreSQL;

  constructor() {
    this.db = PostgreSQL.getInstance();
  }

  async insert(repo: Repository): Promise<boolean> {
    const result: QueryResult = await this.db.executeQuery(`INSERT INTO "repositorio" VALUES (${repo.id},${repo.name}) RETURNING *`);
    if (result) {
      return true;
    }
    return false;
  }

  async get(repoId: number): Promise<Repository> {
    const result: QueryResult = await this.db.executeQuery(`SELECT * FROM "repositorio" WHERE id=${repoId}`);
    if (result) {
      if (process.env.LOGS) console.log(`RepositoryDAOPgSql.get(${repoId})`, result);
    }
    const repo: Repository = new Repository(result.rows[0]);
    return repo;
  }

  async getAll(): Promise<Repository[]> {
    const result: QueryResult = await this.db.executeQuery(`SELECT * FROM "repositorio"`);
    const repos: Repository[] = [];
    if (result) {
      result.rows.map((row) => {
        repos.push(new Repository(row));
      });
    }
    return repos;
  }

  async update(repo: Repository): Promise<Repository> {
    const result: QueryResult = await this.db.executeQuery(`UPDATE "repositorio" SET (nome)=(${repo.name}) WHERE id=${repo.id} RETURNING *`);
    if (result) {
      return new Repository(result.rows[0]);
    }
    return undefined;
  }

  async delete(repoId: number): Promise<boolean> {
    const result: QueryResult = await this.db.executeQuery(`DELETE FROM "repositorio" WHERE id=${repoId} RETURNING *`);
    if (result) {
      return true;
    }
    return false;
  }
}

export default new RepositoryDAOPgSql();
