import { PassageiroGateway } from '../gateway/PassageiroGateway.js';

export class CadastroPassageiroService {
  constructor() {
    this.gateway = new PassageiroGateway();
  }

  async cadastrar(passageiro) {
    return await this.gateway.create(passageiro);
  }
}