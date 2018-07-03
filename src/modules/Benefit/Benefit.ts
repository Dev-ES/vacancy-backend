import BenefitType from "./BenefitType";
import Persistent from "./../interfaces/Persistent";

class Benefit implements Persistent {
  id: number;
  vacancyId: number;
  name: string;
  type: BenefitType;
  value: number;

  constructor(data: any, vacancyId: number) {
    this.id = data.id;
    this.vacancyId = vacancyId;
    this.name =  data.name;
    this.value = data.value;
    this.BenefitType = data.type;
  }
}

export default Repository;
