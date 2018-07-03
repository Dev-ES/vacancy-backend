// import BenefitType from "./BenefitType";
// import Persistent from "./../interfaces/Persistent";

class Benefit {
  id: number;
  vacancyId: number;
  name: string;
  value: number;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.value = data.value;
  }
}

export default Benefit;
