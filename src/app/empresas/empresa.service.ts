import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Empresa } from '../core/model';

export class EmpresaFiltro {
  nome: string;
  cnpj: string;
  codigo: number;
  pagina = 0;
  itensPorPagina = 5;
}



@Injectable()
export class EmpresaService {

  empresasUrl = 'http://localhost:8080/empresas';

  constructor(private http: Http) { }

  pesquisar(filtro: EmpresaFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();

    // tslint:disable-next-line: align
    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());


    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    if (filtro.cnpj) {
      params.set('cnpj', filtro.cnpj);
    }

    return this.http.get(`${this.empresasUrl}?resumo`,
      { headers, search: params })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const lancamentos = responseJson.content;
        const resultado = {
          lancamentos,
          total: responseJson.totalElements
        };

        return resultado;
      });
  }

  excluir(codigo: number): Promise<void> {
    const headers = new Headers();
    console.log('Delete codigo: ' + codigo);
    return this.http.delete(`${this.empresasUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(lancamento: Empresa): Promise<Empresa> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.empresasUrl,
        JSON.stringify(lancamento), { headers })
      .toPromise()
      .then(response => response.json());
  }

  atualizar(lancamento: Empresa): Promise<Empresa> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.empresasUrl}/${lancamento.codigo}`,
        JSON.stringify(lancamento), { headers })
      .toPromise()
      .then(response => {
        const EmpresaAlterada = response.json() as Empresa;

        return EmpresaAlterada;

      });
  }

  buscarPorCodigo(codigo: number): Promise<Empresa> {
    const headers = new Headers();


    return this.http.get(`${this.empresasUrl}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const lancamento = response.json() as Empresa;


        return lancamento;
      });
  }



}



