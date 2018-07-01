
class Repository {
  id: number;
  nome: string;
  url: string;

  constructor(data) {
    this.id = data.id;
    this.nome = data.nome;
    this.url = data.url;
  }

  save(): void {

  }
}

export default Repository;
