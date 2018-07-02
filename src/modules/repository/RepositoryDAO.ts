import DAO from "./../interfaces/DAO";
import Repository from "./Repository";

interface RepositoryDAO extends DAO {
  insert<Repository>(repo: Repository): Promise<boolean>;
  get<Repository>(repoId: number): Promise<Repository>;
  getAll<Repository>(): Promise<Repository[]>;
  update<Repository>(repo: Repository): Promise<Repository>;
  delete<Repository>(repoId: number): Promise<boolean>;
}

export default RepositoryDAO;
