import { CompraGateway } from '../gateway/CompraGateway.js';

export class CadastroCompraService {
  constructor() {
    this.gateway = new CompraGateway();
  }

  async cadastrar(compra) {
    return await this.gateway.create(compra);
  }
}