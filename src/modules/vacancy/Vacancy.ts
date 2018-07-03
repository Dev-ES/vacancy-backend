import Benefit from "./../benefit/Benefit";

class Vacancy {
  id: number;
  title: string;
  benefits: Benefit[];

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.benefits = data.benefits != undefined ? data.benefits.map(
      (benef) => { return new Benefit(benef); }
    ) : undefined;
    console.log(this.benefits);
  }

}


export default Vacancy;
