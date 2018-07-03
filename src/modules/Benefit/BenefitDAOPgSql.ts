import PostgreSQL from "./../../utils/PostgreSQL";
import Benefit from "./Benefit";
import BenefitDAO from "./BenefitDAO";
import { QueryResult } from "pg";


class BenefitDAOPgSql implements BenefitDAO {
  private db: PostgreSQL;

  constructor() {
    this.db = PostgreSQL.getInstance();
  }

  insert(benef: Benefit): Promise<boolean> {
    console.log("Ok Insert");
  }
  get(benefId: number): Promise<Benefit> {
    console.log("Ok Get");
  }
  update(benef: Benefit): Promise<boolean> {
    console.log("Ok Update");
  }
  getAll(): Promise<Benefit[]> {
    console.log("Ok GetAll");
  }
  delete(benefIid: number): Promise<boolean>  {
    console.log("Ok Delete");
  }
}
