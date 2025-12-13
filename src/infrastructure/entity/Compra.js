export class Compra {
  constructor(
    idPassageiro,
    metodoPagamento,
    valorTotal,
    comprovantePagamentoUrl,
    dataCompra = null,
    statusPagamento = 'PENDENTE',
    passagens = [],
    id = null
  ) {
    this.id = id;
    this.idPassageiro = idPassageiro;
    this.dataCompra = dataCompra;
    this.metodoPagamento = metodoPagamento;
    this.statusPagamento = statusPagamento;
    this.valorTotal = valorTotal;
    this.comprovantePagamentoUrl = comprovantePagamentoUrl;
    this.passagens = passagens;
  }

  toJSON() {
    return {
      id: this.id,
      idPassageiro: this.idPassageiro,
      dataCompra: this.dataCompra,
      metodoPagamento: this.metodoPagamento,
      statusPagamento: this.statusPagamento,
      valorTotal: this.valorTotal,
      comprovantePagamentoUrl: this.comprovantePagamentoUrl,
      passagens: this.passagens,
    };
  }

  static fromJSON(json) {
    return new Compra(
      json.idPassageiro,
      json.metodoPagamento,
      json.valorTotal,
      json.comprovantePagamentoUrl,
      json.dataCompra,
      json.statusPagamento || 'PENDENTE',
      json.passagens || [],
      json.id
    );
  }
}
