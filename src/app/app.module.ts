import { ConsultaCepService } from './core/consulta-cep.service';
import { EmpresasCadastroComponent } from './empresas/empresas-cadastro/empresas-cadastro.component';
import { EmpresasPesquisaComponent } from './empresas/empresas-pesquisa/empresas-pesquisa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { TableModule } from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { SharedModule } from './shared/shared.module';
import { EmpresasModule } from './empresas/empresas.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { EmpresaService } from './empresas/empresa.service';
import { ToastyModule } from 'ng2-toasty';



const routes: Routes = [
  { path: 'cadastros', component: EmpresasPesquisaComponent },
  { path: 'cadastros/novo', component: EmpresasCadastroComponent },
  { path: 'cadastros/:codigo', component: EmpresasCadastroComponent },
];

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ConfirmDialogModule,
    RouterModule.forRoot(routes),

    ToastyModule.forRoot(),
    InputMaskModule,
    ReactiveFormsModule,

    DropdownModule,
    TableModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CoreModule,
    EmpresasModule,

  ],

  providers: [EmpresaService,
              ConfirmationService,
              ConsultaCepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
