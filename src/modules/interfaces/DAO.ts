
interface DAO {
  insert(object: any): boolean;
  get(objectId: number): any;
  getAll(): any;
  update(object: any): any;
  delete(objectId: number): boolean;
}

export default DAO;
