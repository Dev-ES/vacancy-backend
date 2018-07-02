
interface DAO {
  insert<T>(object: T): any;
  get<T>(objectId: number): any;
  getAll<T>(): any;
  update<T>(object: T): any;
  delete(objectId: number): any;
}

export default DAO;
