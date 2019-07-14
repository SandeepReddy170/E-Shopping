import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart;

  constructor(private cartService: ShoppingCartService) {}

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  getQuantity(){
    if(!this.shoppingCart) return 0;

    let item = this.shoppingCart.items[this.product.$key];
    console.log(item);
    return item ? item.quantity : 0;
  }
}
