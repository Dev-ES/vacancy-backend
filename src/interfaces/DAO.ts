
interface DAO {
  insert(object: any): any;
  get(objectId: number): any;
  getAll(): any;
  update(object: any): any;
  delete(objectId: number): any;
}

export default DAO;
