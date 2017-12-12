import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';

import { CadastroModule } from './cadastro/cadastro.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteDetalheComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, LoginModule, CadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
