
interface DAO {
  insert<T>(object: T): boolean;
  get<T>(objectId: number): T;
  getAll<T>(): T[];
  update<T>(object: T): T;
  delete<T>(objectId: number): boolean;
}

export default DAO;
