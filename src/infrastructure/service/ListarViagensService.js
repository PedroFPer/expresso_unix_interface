import { ViagemGateway } from '../gateway/ViagemGateway.js';

export class ListarViagensService {
  constructor() {
    this.gateway = new ViagemGateway();
  }

  async executar() {
    return await this.gateway.listAll();
  }
}