export class Viagem {
  constructor(
    idEmpresa,
    origem,
    destino,
    localEmbarque,
    localDesembarque,
    dataSaida,
    dataChegada,
    horarioSaida,
    horarioChegada,
    duracaoViagem,
    motoristaResponsavel,
    precoPassagem,
    totalAssentos,
    assentosOcupados = 0,
    status = 'ATIVO',
    tipoViagem = 'IDA',
    id = null
  ) {
    this.id = id;
    this.idEmpresa = idEmpresa;
    this.origem = origem;
    this.destino = destino;
    this.localEmbarque = localEmbarque;
    this.localDesembarque = localDesembarque;
    this.dataSaida = dataSaida;
    this.dataChegada = dataChegada;
    this.horarioSaida = horarioSaida;
    this.horarioChegada = horarioChegada;
    this.duracaoViagem = duracaoViagem;
    this.motoristaResponsavel = motoristaResponsavel;
    this.precoPassagem = precoPassagem;
    this.totalAssentos = totalAssentos;
    this.assentosOcupados = assentosOcupados;
    this.status = status;
    this.tipoViagem = tipoViagem;
  }

  toJSON() {
    return {
      id: this.id,
      idEmpresa: this.idEmpresa,
      origem: this.origem,
      destino: this.destino,
      localEmbarque: this.localEmbarque,
      localDesembarque: this.localDesembarque,
      dataSaida: this.dataSaida,
      dataChegada: this.dataChegada,
      horarioSaida: this.horarioSaida,
      horarioChegada: this.horarioChegada,
      duracaoViagem: this.duracaoViagem,
      motoristaResponsavel: this.motoristaResponsavel,
      precoPassagem: this.precoPassagem,
      totalAssentos: this.totalAssentos,
      assentosOcupados: this.assentosOcupados,
      status: this.status,
      tipoViagem: this.tipoViagem,
    };
  }

  static fromJSON(json) {
    return new Viagem(
      json.idEmpresa,
      json.origem,
      json.destino,
      json.localEmbarque,
      json.localDesembarque,
      json.dataSaida,
      json.dataChegada,
      json.horarioSaida,
      json.horarioChegada,
      json.duracaoViagem,
      json.motoristaResponsavel,
      json.precoPassagem,
      json.totalAssentos,
      json.assentosOcupados || 0,
      json.status || 'ATIVO',
      json.tipoViagem || 'IDA',
      json.id
    );
  }
}
