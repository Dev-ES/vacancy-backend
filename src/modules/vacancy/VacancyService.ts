import Vacancy from "./Vacancy";
import Benefit from "./../benefit/Benefit";

class VacancyService {
  constructor() {}

  newVacancy(data): void {
    const v: Vacancy = new Vacancy(data);
  }
}

export default new VacancyService();
