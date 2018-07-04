import DAO from "./../interfaces/DAO";
import Vacancy from "./Vacancy";

interface VacancyDAO extends DAO {
  insert(vacancy: Vacancy): Promise<boolean>;
  get(vacancyId: number): Promise<Vacancy>;
  update(vacancy: Vacancy): Promise<boolean>;
  getAll(): Promise<Vacancy[]>;
  delete(vacancyId: number): Promise<boolean>;
}
