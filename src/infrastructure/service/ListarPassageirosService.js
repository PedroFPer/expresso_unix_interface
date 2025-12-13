import { PassageiroGateway } from '../gateway/PassageiroGateway.js';

export class ListarPassageirosService {
  constructor() {
    this.gateway = new PassageiroGateway();
  }

  async executar() {
    return await this.gateway.listAll();
  }
}