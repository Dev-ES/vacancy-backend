import DAO from "./../../interfaces/DAO";
import Repository from "./Repository";

interface RepositoryDAO extends DAO {
  insert(repo: Repository): Promise<boolean>;
  get(repoId: number): Promise<Repository>;
  getAll(): Promise<Repository[]>;
  update(repo: Repository): Promise<Repository>;
  delete(repoId: number): Promise<boolean>;
}

export default RepositoryDAO;
