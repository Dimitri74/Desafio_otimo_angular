import { RouterModule } from '@angular/router';
import { ErrorHandlerService } from './error-handler.service';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavbarComponent } from './navbar/navbar.component';
import { ToastyModule } from 'ng2-toasty';
import { EmpresaService } from '../empresas/empresa.service';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,
    ToastyModule,

  ],
  providers: [
    EmpresaService,
    ErrorHandlerService,


    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
