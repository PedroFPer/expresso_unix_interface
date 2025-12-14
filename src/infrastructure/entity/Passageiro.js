export class Passageiro {
  constructor(nome, cpf, email, telefone, data_nascimento, id_passageiro = null) {
    this.id_passageiro = id_passageiro;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
    this.data_nascimento = data_nascimento;
  }

  toJSON() {
    return {
      id_passageiro: this.id_passageiro,
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      telefone: this.telefone,
      data_nascimento: this.data_nascimento,
    };
  }

  static fromJSON(json) {
    return new Passageiro(
      json.nome,
      json.cpf,
      json.email,
      json.telefone,
      json.data_nascimento,
      json.id_passageiro
    );
  }
}
