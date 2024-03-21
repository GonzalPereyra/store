import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './../../components/products/products.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ProductsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  formChild(event: string) {
    console.log('estamos en el padre');
    console.log(event)
  }
  }
  
