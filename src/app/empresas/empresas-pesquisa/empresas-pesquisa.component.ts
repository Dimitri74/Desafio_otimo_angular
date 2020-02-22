import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { EmpresaFiltro } from './../empresa.service';
import { EmpresaService } from '../empresa.service';
import { ErrorHandlerService } from './../../core/error-handler.service';


@Component({
  selector: 'app-empresas-pesquisa',
  templateUrl: './empresas-pesquisa.component.html',
  styleUrls: ['./empresas-pesquisa.component.css']
})
export class EmpresasPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new EmpresaFiltro();
  lancamentos = [];
  @ViewChild('tabela', { static: true }) grid;


  // tslint:disable-next-line: no-shadowed-variable
  constructor(private EmpresaService: EmpresaService,
              private toasty: ToastyService,
              private confirmation: ConfirmationService,
              private errorHandler: ErrorHandlerService,

  ) { }



  ngOnInit() {

  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.EmpresaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;
      })
      .catch(erro => this.errorHandler.handle(erro));

  }


  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(lancamento: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }



  excluir(lancamento: any) {
    this.EmpresaService.excluir(lancamento.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        this.toasty.success('Empresa excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }



}






