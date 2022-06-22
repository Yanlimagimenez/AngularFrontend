import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção!`;
  idProduto: number = 3;
  precoProduto: number = 2.59;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png'
  dataValidade = '2021-12-31'

  listaProdutos: any[]=[
    {nome: 'Curso Java', precoProduto: 120.20, validade: '2022-06-01', id:1},
    {nome: 'Curso Java Avançado', precoProduto: 240.40, validade: '2022-12-30', id:2},
    {nome: 'Curso C#', precoProduto: 160.00, validade: '2022-08-02', id:3, promocao: true},
    {nome: 'Curso Python', precoProduto: 60.66, validade: '2021-12-25', id:4}
  ];

  constructor() {
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('ID: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);

    var var1;
    let var2;
    const var3 = 1;

    /*var variavel1;
    let variavel2;

    var idade = 18;
    console.log('Minha idade é: ',idade)

    function imprimeIdade()
    {
      for(let idade = 30; idade <= 40; idade++)
      {
        console.log('Idade dentro do for: ',idade)
      }
      console.log('Idade fora do for: ',idade)
    }
    imprimeIdade();*/
  }

  ngOnInit(): void {
  }

}
