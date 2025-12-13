export class Passagem {
  constructor(
    id_viagem,
    id_compra,
    id_passageiro,
    codigo_bilhete,
    status_pagamento = 'PENDENTE',
    presenca = 'AUSENTE',
    qr_code = null,
    embarque_realizado = false,
    desembarque_realizado = false,
    id_passagem = null
  ) {
    this.id_passagem = id_passagem;
    this.id_viagem = id_viagem;
    this.id_compra = id_compra;
    this.id_passageiro = id_passageiro;
    this.codigo_bilhete = codigo_bilhete;
    this.status_pagamento = status_pagamento;
    this.presenca = presenca;
    this.qr_code = qr_code;
    this.embarque_realizado = embarque_realizado;
    this.desembarque_realizado = desembarque_realizado;
  }

  toJSON() {
    return {
      id_passagem: this.id_passagem,
      id_viagem: this.id_viagem,
      id_compra: this.id_compra,
      id_passageiro: this.id_passageiro,
      codigo_bilhete: this.codigo_bilhete,
      status_pagamento: this.status_pagamento,
      presenca: this.presenca,
      qr_code: this.qr_code,
      embarque_realizado: this.embarque_realizado,
      desembarque_realizado: this.desembarque_realizado,
    };
  }

  static fromJSON(json) {
    return new Passagem(
      json.id_viagem,
      json.id_compra,
      json.id_passageiro,
      json.codigo_bilhete,
      json.status_pagamento || 'PENDENTE',
      json.presenca || 'AUSENTE',
      json.qr_code,
      json.embarque_realizado || false,
      json.desembarque_realizado || false,
      json.id_passagem
    );
  }
}
