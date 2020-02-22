import { ConsultaCepService } from './../../core/consulta-cep.service';
import { Http } from '@angular/http';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { EmpresaService } from './../empresa.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Form } from '@angular/forms';
import { Empresa } from 'src/app/core/model';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';



@Component({
  selector: 'app-empresas-cadastro',
  templateUrl: './empresas-cadastro.component.html',
  styleUrls: ['./empresas-cadastro.component.css']
})
export class EmpresasCadastroComponent implements OnInit {

  tipoEmpresas = [
    { label: 'Matriz', value: 'M' },
    { label: 'Filial', value: 'F' },



  ];

  empresa = new Empresa();


  constructor(
    private empresaService: EmpresaService,
    private Toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
    private consultaCepService: ConsultaCepService

  ) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params.codigo);

    const codigoEmpresa = this.route.snapshot.params.codigo;

    if (codigoEmpresa) {
      this.carregarEmpresa(codigoEmpresa);
    }

  }

  get editando() {
    return Boolean(this.empresa.codigo);
  }

  carregarEmpresa(codigo: number) {
    this.empresaService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.empresa = lancamento;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  salvar(form: FormControl) {

    if (this.editando) {
      this.atualizarEmpresa(form);
    } else {
      this.adicionarEmpresa(form);
    }
  }


  adicionarEmpresa(form: FormControl) {
    this.empresaService.adicionar(this.empresa)
      .then(empresaAdicionada => {
        this.Toasty.success('Empresa cadastrada  com sucesso!');

        // form.reset();
        // this.empresa = new Empresa();
        this.router.navigate(['/cadastros', empresaAdicionada.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarEmpresa(form: FormControl) {
    this.empresaService.atualizar(this.empresa)
      .then(lancamento => {
        this.empresa = lancamento;

        this.Toasty.success('Empresa alterada com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  consultaCEP(cep, form ) {
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {

      this.consultaCepService.consultaCEP(cep)
        .subscribe(dados => this.populaDadosForm(dados, form));

    }
  }

  populaDadosForm(dados, formulario) {



    formulario.form.patchValue({

    endereco: {
    logradouro: dados.logradouro,
    complemento: dados.complemento,
    bairro: dados.bairro,
    cidade: dados.localidade,
    estado: dados.uf
  }




});


    console.log(formulario);



  }


}










