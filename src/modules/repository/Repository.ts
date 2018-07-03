
class Repository {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _url: string;

  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._url = data.url;
  }

  save(): void {

  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }
}

export default Repository;
