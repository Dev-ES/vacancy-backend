import BenefitType from "./BenefitType";
// import Persistent from "./../interfaces/Persistent";

class Benefit {
  id: number;
  vacancyId: number;
  name: string;
  value: number;
  type: BenefitType;

  constructor(data: any, vacancyId: number) {
    this.vacancyId = vacancyId;
    this.id = data.id;
    this.name = data.name;
    this.value = data.value;
    this.type = new BenefitType(data.type);
  }
}

export default Benefit;
