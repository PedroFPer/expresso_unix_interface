export class Empresa {
  constructor(
    razaoSocial,
    cnpj,
    emailContato,
    telefoneContato,
    endereco,
    representanteNome,
    representanteCpf,
    representanteEmail,
    representanteTelefone,
    linkCatalogoPublico = '',
    urlFotoPerfil = '',
    urlFotoCapa = '',
    id = null
  ) {
    this.id = id;
    this.razaoSocial = razaoSocial;
    this.cnpj = cnpj;
    this.emailContato = emailContato;
    this.telefoneContato = telefoneContato;
    this.endereco = endereco;
    this.representanteNome = representanteNome;
    this.representanteCpf = representanteCpf;
    this.representanteEmail = representanteEmail;
    this.representanteTelefone = representanteTelefone;
    this.linkCatalogoPublico = linkCatalogoPublico;
    this.urlFotoPerfil = urlFotoPerfil;
    this.urlFotoCapa = urlFotoCapa;
  }

  toJSON() {
    return {
      id: this.id,
      razaoSocial: this.razaoSocial,
      cnpj: this.cnpj,
      emailContato: this.emailContato,
      telefoneContato: this.telefoneContato,
      endereco: this.endereco,
      representanteNome: this.representanteNome,
      representanteCpf: this.representanteCpf,
      representanteEmail: this.representanteEmail,
      representanteTelefone: this.representanteTelefone,
      linkCatalogoPublico: this.linkCatalogoPublico,
      urlFotoPerfil: this.urlFotoPerfil,
      urlFotoCapa: this.urlFotoCapa,
    };
  }

  static fromJSON(json) {
    return new Empresa(
      json.razaoSocial,
      json.cnpj,
      json.emailContato,
      json.telefoneContato,
      json.endereco,
      json.representanteNome,
      json.representanteCpf,
      json.representanteEmail,
      json.representanteTelefone,
      json.linkCatalogoPublico || '',
      json.urlFotoPerfil || '',
      json.urlFotoCapa || '',
      json.id
    );
  }
}
