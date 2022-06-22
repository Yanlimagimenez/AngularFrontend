import { IProduto } from './../../../model/IProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  /*listaStrings: string[] = ['Primeiro','Segundo','Terceiro'];
  listaNumeros: number[] = [15,15.8,100];
  objetoModelo={
    nome: 'Daniel',
    idade: 18,
    altura: 1.70,
    graduado: true
  };*/

  listaProdutos: IProduto[]=[];

  constructor(private produtosService: ProdutosService) {
    /*for(let item of this.listaStrings){
      console.log(item);
    }
    for(let item of this.listaNumeros){
      console.log(item);
    }
    console.log(this.objetoModelo);*/
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos():void{
    this.produtosService.buscarTodos().subscribe(retorno =>{
      this.listaProdutos = retorno;
    })
  }
}
