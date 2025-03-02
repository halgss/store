import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEsMx from '@angular/common/locales/es-MX';

registerLocaleData(localeEsMx); // 🔹 Registra el formato mexicano



@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input({required: true}) cart: Product[] = [];
  Gtotal = signal(0);


  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  ngOnChanges(chances: SimpleChanges) {
    if (chances['cart']) {
    this.Gtotal.set(this.calcTotal());
     }
  }

  calcTotal() {        
    return this.cart.reduce((total, product) => total + (product.price || 0), 0);
  }
}
