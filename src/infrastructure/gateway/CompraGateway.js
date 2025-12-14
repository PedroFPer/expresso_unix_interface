import httpClient from '../config/AxiosClient.js';
import { Compra } from '../entity/Compra.js';

export class CompraGateway {
  async create(compra) {
    const { data } = await httpClient.post('/compra', compra.toJSON());
    return Compra.fromJSON(data);
  }

  async update(compraId, compra) {
    const { data } = await httpClient.put(`/compra/${compraId}`, compra.toJSON());
    return Compra.fromJSON(data);
  }

  async delete(compraId) {
    return httpClient.delete(`/compra/${compraId}`);
  }

  async getById(compraId) {
    const { data } = await httpClient.get(`/compra/${compraId}`);
    return Compra.fromJSON(data);
  }

  async listAll() {
    const { data } = await httpClient.get('/compra');
    return data.map(Compra.fromJSON);
  }
}