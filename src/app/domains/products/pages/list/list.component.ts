import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from './../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";
@Component({
  selector: 'app-list',
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor() {
    const initProducts =  [] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 100,
        detalle: 'detalle del producto 1',
        img: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 200,
        detalle: 'detalle del producto 2',
        img: 'https://picsum.photos/640/640?r=24',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 300,
        detalle: 'detalle del producto 3',
        img: 'https://picsum.photos/640/640?r=25',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 4',
        price: 400,
        detalle: 'detalle del producto 4',
        img: 'https://picsum.photos/640/640?r=26',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  fromChild(event: string) {
    console.log('estamos en el padre');
    console.log(event);
  }
}
