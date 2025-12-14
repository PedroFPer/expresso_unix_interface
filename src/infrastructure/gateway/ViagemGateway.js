import httpClient from '../config/AxiosClient.js';
import { Viagem } from '../entity/Viagem.js';

export class ViagemGateway {
  async create(viagem) {
    const { data } = await httpClient.post('/viagem', viagem.toJSON());
    return Viagem.fromJSON(data);
  }

  async update(viagemId, viagem) {
    const { data } = await httpClient.put(`/viagem/${viagemId}`, viagem.toJSON());
    return Viagem.fromJSON(data);
  }

  async delete(viagemId) {
    return httpClient.delete(`/viagem/${viagemId}`);
  }

  async getById(viagemId) {
    const { data } = await httpClient.get(`/viagem/${viagemId}`);
    return Viagem.fromJSON(data);
  }

  async listAll() {
    const { data } = await httpClient.get('/viagem');
    return data.map(Viagem.fromJSON);
  }
}