import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import 'rxjs/Rx';

import { CadastroComponent } from './cadastro.component';
import { ValidatorForm } from '../shared/validator-form';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, HttpModule, SharedModule
  ],
  declarations: [CadastroComponent],
  providers: [ValidatorForm]
})
export class CadastroModule { }
