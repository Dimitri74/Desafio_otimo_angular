export class Empresa {

  codigo: number;
  nome: string;
  cnpj: string;
  tipo = 'M';
  // tslint:disable-next-line: variable-name
  razao_social: string;
  contato: string;
  email: string;
  endereco = new Endereco();


}

export class Endereco {

  logradouro: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;

}
