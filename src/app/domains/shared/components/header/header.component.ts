import { Component, computed, inject, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEsMx from '@angular/common/locales/es-MX';
import { CartService } from '../../services/cart.service';
import { Router } from 'express';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';


registerLocaleData(localeEsMx); // 🔹 Registra el formato mexicano
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  hideSideMenu = signal(true);

  private cartService = inject(CartService);
  
  cart = this.cartService.cart;
  Gtotal = this.cartService.total;
  
  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

}
