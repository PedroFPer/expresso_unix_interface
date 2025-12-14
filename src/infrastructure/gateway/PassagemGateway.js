import httpClient from '../config/AxiosClient.js';
import { Passagem } from '../entity/Passagem.js';

export class PassagemGateway {
  async create(passagem) {
    const { data } = await httpClient.post('/passagem', passagem.toJSON());
    return Passagem.fromJSON(data);
  }

  async update(passagemId, passagem) {
    const { data } = await httpClient.put(`/passagem/${passagemId}`, passagem.toJSON());
    return Passagem.fromJSON(data);
  }

  async delete(passagemId) {
    return httpClient.delete(`/passagem/${passagemId}`);
  }

  async getById(passagemId) {
    const { data } = await httpClient.get(`/passagem/${passagemId}`);
    return Passagem.fromJSON(data);
  }

  async listAll() {
    const { data } = await httpClient.get('/passagem');
    return data.map(Passagem.fromJSON);
  }
}