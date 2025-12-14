import httpClient from '../config/AxiosClient.js';
import { Passageiro } from '../entity/Passageiro.js';

export class PassageiroGateway {
  async create(passageiro) {
    const { data } = await httpClient.post('/passageiro', passageiro.toJSON());
    return Passageiro.fromJSON(data);
  }

  async update(passageiroId, passageiro) {
    const { data } = await httpClient.put(`/passageiro/${passageiroId}`, passageiro.toJSON());
    return Passageiro.fromJSON(data);
  }

  async delete(passageiroId) {
    return httpClient.delete(`/passageiro/${passageiroId}`);
  }

  async getById(passageiroId) {
    const { data } = await httpClient.get(`/passageiro/${passageiroId}`);
    return Passageiro.fromJSON(data);
  }

  async listAll() {
    const { data } = await httpClient.get('/passageiro');
    return data.map(Passageiro.fromJSON);
  }
}