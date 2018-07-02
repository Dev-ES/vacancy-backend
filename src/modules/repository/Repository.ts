
class Repository {
  public readonly id: number;
  public readonly name: string;
  public readonly url: string;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.url = data.url;
  }

  save(): void {

  }
}

export default Repository;
