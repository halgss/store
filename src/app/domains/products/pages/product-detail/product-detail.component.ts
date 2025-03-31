import { Component, inject, Injectable, InjectionToken, Input, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@products/components/product/product.component';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})

export class ProductDetailComponent {

  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');
  private productService = inject(ProductService);
  private CartService = inject(CartService)
  

  ngOnInit() {
    if (this.id) {
      this.productService.getOne(this.id)
      .subscribe({
        next: (product) => {
          console.log(product);
          this.product.set(product);
          if (product.images.length > 0) {
            this.cover.set(product.images[0])
          }
        }
      })
    }
  }

  changeCover(newImg: string) 
  {
    this.cover.set(newImg);
  }
  
  addToCart() {
    const product =this.product();
    if (product) {
      this.CartService.addToCart(product);
    }    
  }

}