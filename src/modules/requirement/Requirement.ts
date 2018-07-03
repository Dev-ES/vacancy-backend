import RequirementType from "./RequirementType";
// import Persistent from "./../interfaces/Persistent";

class Requirement {
  id: number;
  vacancyId: number;
  name: string;
  description: number;
  type: RequirementType;

  constructor(data: any, vacancyId: number) {
    console.log(data);
    this.vacancyId = vacancyId;
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.type = new RequirementType(data.type);
  }
}

export default Requirement;
