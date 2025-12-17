import httpClient from '../config/AxiosClient.js';
import { Empresa } from '../entity/Empresa.js';

export class EmpresaGateway {
  async create(empresa) {
    const { data } = await httpClient.post('/empresa', empresa.toJSON());
    return Empresa.fromJSON(data);
  }

  async update(empresaId, empresa) {
    const { data } = await httpClient.put(`/empresa/${empresaId}`, empresa.toJSON());
    return Empresa.fromJSON(data);
  }

  async delete(empresaId) {
    return httpClient.delete(`/empresa/${empresaId}`);
  }

  async getById(empresaId) {
    const { data } = await httpClient.get(`/empresa/${empresaId}`);
    return Empresa.fromJSON(data);
  }

  async listAll() {
    const { data } = await httpClient.get('/empresa');
    return data.map(Empresa.fromJSON);
  }
}