class RequirementType {
  id: number;
  name: string;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
  }
}

export default RequirementType;
