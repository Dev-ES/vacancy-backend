import DAO from "./../interfaces/DAO";
import Benefit from "./Benefit";

interface BenefitDAO extends DAO {
  insert(benef: Benefit): Promise<boolean>;
  get(benefId: number): Promise<Benefit>;
  update(benef: Benefit): Promise<boolean>;
  getAll(): Promise<Benefit[]>;
  delete(benefIid: number): Promise<boolean>;
}
