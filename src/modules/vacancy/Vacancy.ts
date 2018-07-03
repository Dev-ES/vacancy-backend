import Benefit from "./../benefit/Benefit";

class Vacancy {
  id: number;
  title: string;
  description: String;
  location: String;
  howToApply: String;
  alocado: boolean;
  benefits: Benefit[];

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.location = data.location;
    this.howToApply = data.howToApply;
    // create benefits list
    this.benefits = data.benefits != undefined ? data.benefits.map(
      (benef) => { return new Benefit(benef, data.id); }
    ) : undefined;
  }
}
export default Vacancy;
