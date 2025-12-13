export class Funcionario {
  constructor(
    id_empresa,
    nome_funcionario,
    email,
    senha,
    cargo,
    status = 'ATIVO',
    cnh = null,
    id_funcionario = null
  ) {
    this.id_funcionario = id_funcionario;
    this.id_empresa = id_empresa;
    this.nome_funcionario = nome_funcionario;
    this.email = email;
    this.senha = senha;
    this.cargo = cargo;
    this.status = status;
    this.cnh = cnh;
  }

  toJSON() {
    return {
      id_funcionario: this.id_funcionario,
      id_empresa: this.id_empresa,
      nome_funcionario: this.nome_funcionario,
      email: this.email,
      senha: this.senha,
      cargo: this.cargo,
      status: this.status,
      cnh: this.cnh,
    };
  }

  static fromJSON(json) {
    return new Funcionario(
      json.id_empresa,
      json.nome_funcionario,
      json.email,
      json.senha,
      json.cargo,
      json.status || 'ATIVO',
      json.cnh,
      json.id_funcionario
    );
  }
}
