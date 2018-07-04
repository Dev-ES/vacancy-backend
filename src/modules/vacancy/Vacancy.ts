import Benefit from "./../benefit/Benefit";
import Requirement from "./../requirement/Requirement";
import EnumConctractType from "./EnumContractType";
import EnumProfessionalLevel from "./EnumProfessionalLevel";

class Vacancy {
  id: number;
  idContratant: number;
  title: string;
  description: string;
  contractType: any;
  professionalLevel: any;
  location: string;
  howToApply: string;
  allocated: boolean;
  benefits: Benefit[];
  requirements: Requirement[];

  constructor(data: any) {
    this.id = data.id;
    this.idContratant = data.idContratant;
    this.title = data.title;
    this.description = data.description;
    this.location = data.location;
    this.howToApply = data.howToApply;
    this.allocated = data.allocated;

    this.contractType = { "id": data.contractType,
     "name": EnumConctractType[data.contractType]};

    this.professionalLevel = {"id": data.professionalLevel,
     "name": EnumProfessionalLevel[data.professionalLevel]};

    // create benefits list
    this.benefits = data.benefits != undefined ? data.benefits.map(
      (benef) => { return new Benefit(benef, data.id); }
    ) : undefined;

    // create requirements list
    this.requirements = data.requirements != undefined ? data.requirements.map(
      (requer) => { return new Requirement(requer, data.id); }
    ) : undefined;

    console.log(this);
  }
}
export default Vacancy;
