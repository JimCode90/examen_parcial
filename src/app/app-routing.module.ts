import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import {InicioComponent} from "./home/inicio/inicio.component";
import {ClienteComponent} from "./componentes/cliente/cliente.component";

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'clientes', component: ClienteComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
