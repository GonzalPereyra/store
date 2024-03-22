import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input({required: true}) img: string = '';
  @Input({required: true}) price: number = 0;
  @Input({required: true}) title: string = '';

  //img = 'https://picsum.photos/640/640?r=' + Math.random()

  @Output() addToCart = new EventEmitter();

  addToCardHandler() {
    console.log ('click form child');
    this.addToCart.emit('Hola este es un mensaje desde el hijo');
  }
}
