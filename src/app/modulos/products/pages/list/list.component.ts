import { Component, signal } from '@angular/core';

import { ProductsComponent } from './../../components/products/products.component';

import { Products } from './../../../compartido/moduls/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal < Products[]>([]);

  
  constructor() {
    const initProducts: Products[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r='
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r='
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r='
      }
    ]
    this.products.set(initProducts);
    console.log('e');
    
  }


  formChild(event: string) {
    console.log('estamos en el padre');
    console.log(event)
  }
  }
  
