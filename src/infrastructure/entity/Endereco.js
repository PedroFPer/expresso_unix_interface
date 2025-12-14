export class Endereco {
  constructor(cep, estado, cidade, bairro, numero, logradouro, id = null) {
    this.id = id;
    this.cep = cep;
    this.estado = estado;
    this.cidade = cidade;
    this.bairro = bairro;
    this.numero = numero;
    this.logradouro = logradouro;
  }

  toJSON() {
    return {
      id: this.id,
      cep: this.cep,
      estado: this.estado,
      cidade: this.cidade,
      bairro: this.bairro,
      numero: this.numero,
      logradouro: this.logradouro,
    };
  }

  static fromJSON(json) {
    return new Endereco(
      json.cep,
      json.estado,
      json.cidade,
      json.bairro,
      json.numero,
      json.logradouro,
      json.id
    );
  }
}
