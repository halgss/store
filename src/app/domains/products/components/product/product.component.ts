import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [CommonModule],    
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  /* readonly img = input<string>('');
  readonly price = input<number>(0);
  readonly title = input.required<string>(); */
  @Input({required: true}) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit(this.product);
    }
}
