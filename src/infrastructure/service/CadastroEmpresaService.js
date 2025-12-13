import { EmpresaGateway } from '../gateway/EmpresaGateway.js';

export class CadastroEmpresaService {
  constructor() {
    this.gateway = new EmpresaGateway();
  }

  async cadastrar(empresa) {
    return await this.gateway.create(empresa);
  }
}