import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { EmpresasPesquisaComponent } from './empresas-pesquisa/empresas-pesquisa.component';
import { EmpresasCadastroComponent } from './empresas-cadastro/empresas-cadastro.component';
import { SharedModule } from './../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';








@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    InputMaskModule,
    DropdownModule,
    TableModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule








  ],
  declarations: [
    EmpresasCadastroComponent,
    EmpresasPesquisaComponent,






  ],
  exports: [
    EmpresasCadastroComponent,
    EmpresasPesquisaComponent,

  ]
})
export class EmpresasModule {}
