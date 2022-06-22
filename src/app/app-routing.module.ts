import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarProdutosComponent } from './components/Products/listar-produtos/listar-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarProdutosComponent } from './components/Products/cadastrar-produtos/cadastrar-produtos.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'produtos',component:ListarProdutosComponent},
    {path:'produtos/cadastrar',component:CadastrarProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
