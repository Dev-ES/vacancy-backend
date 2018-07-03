import Benefit from "./../benefit/Benefit";
import Requirement from "./../requirement/Requirement";


class Vacancy {
  id: number;
  idContratant: number;
  title: string;
  description: String;
  location: String;
  howToApply: String;
  alocado: boolean;
  benefits: Benefit[];
  requirements: Requirement[];

  constructor(data: any) {
    this.id = data.id;
    this.idContratant = data.idContratant;
    this.title = data.title;
    this.description = data.description;
    this.location = data.location;
    this.howToApply = data.howToApply;

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
