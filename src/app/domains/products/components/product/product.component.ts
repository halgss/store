import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() img: string = '';
  @Input() price: number = 0;
  @Input({required:true}) title: string = '';

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('click form child');
    this.addToCart.emit('hola este es un mensaje desde el hijo ' + this.title);
    }
}
