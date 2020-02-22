import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: Http) { }

  consultaCEP(cep: string) {


    cep = cep.replace(/\D/g, '');


    if (cep !== '') {

      const validacep = /^[0-9]{8}$/;


      if (validacep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .map(dados => dados.json())
        .subscribe(dados => console.log(dados));

      }
    }

    return of({});
  }


}
