import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Item {
  Id: number;
  Name: string;
  Price: number;
  Quantity: number;
  imgURL: string;
}

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.components.html',
  styleUrls: ['./carrinho-compras.components.css']
})
export class CarrinhoComprasComponent implements OnInit {
  listaDeItens: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  subtotal: { total: string, quantidade: number } = { total: 'R$ 0,00', quantidade: 0 };

  constructor() {}

  ngOnInit(): void {
    // Exemplos de produtos
    const produtos: Item[] = [
      { Id: 1, Name: 'Iphone 14', Price: 1500, Quantity: 0, imgURL: 'https://m.media-amazon.com/images/I/51PWxFNyyBL._AC_SL1000_.jpg' },
      { Id: 2, Name: 'Notebook', Price: 2500, Quantity: 0, imgURL: 'https://m.media-amazon.com/images/I/51N6PRqw9kL._AC_SL1000_.jpg' },
      { Id: 3, Name: 'Fone de bluetooth', Price: 100, Quantity: 0, imgURL: 'https://m.media-amazon.com/images/I/41qM+itS5SL._AC_SL1080_.jpg' },
      { Id: 4, Name: 'Relogio Smart', Price: 1000, Quantity: 0, imgURL: 'https://m.media-amazon.com/images/I/71s7fVYV1kL._AC_SL1500_.jpg' },
      { Id: 5, Name: 'Placa de VIdeo', Price: 21000, Quantity: 0, imgURL: 'https://m.media-amazon.com/images/I/81H-aYZrH5L._AC_SL1500_.jpg' },
      { Id: 6, Name: 'MONITOR LG GAMER', Price: 3000, Quantity: 0, imgURL: 'https://m.media-amazon.com/images/I/612m4wK+uNL._AC_SL1200_.jpg' },
    ];

    // Inicializa a lista de itens no carrinho com os produtos
    this.listaDeItens.next(produtos);

    // Inicializa o subtotal como zero
    this.subtotal = { total: 'R$ 0,00', quantidade: 0 };
  }

  adicionarAoCarrinho(item: Item) {
    const itensAtuais = this.listaDeItens.getValue();
    this.listaDeItens.next([...itensAtuais, item]);
    this.subtotal = this.calcularSubtotal([...itensAtuais, item]);
  }

  calcularSubtotal(itens: Item[]): { total: string, quantidade: number } {
    let total = 0;
    let quantidade = 0;
    itens.forEach(item => {
      total += item.Price * item.Quantity;
      quantidade += item.Quantity;
    });
    return { total: this.formatarMoeda(total), quantidade };
  }

  removerItemDoCarrinho(index: number) {
    const itensAtuais = this.listaDeItens.getValue();
    itensAtuais.splice(index, 1);
    this.listaDeItens.next(itensAtuais);
    this.subtotal = this.calcularSubtotal(itensAtuais);
  }

  aumentarQuantidade(index: number) {
    const itensAtuais = this.listaDeItens.getValue();
    itensAtuais[index].Quantity++;
    this.listaDeItens.next(itensAtuais);
    this.subtotal = this.calcularSubtotal(itensAtuais);
  }

  diminuirQuantidade(index: number) {
    const itensAtuais = this.listaDeItens.getValue();
    if (itensAtuais[index].Quantity > 0) {
      itensAtuais[index].Quantity--;
    }
    this.listaDeItens.next(itensAtuais);
    this.subtotal = this.calcularSubtotal(itensAtuais);
  }

  formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}