import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: Product;
  @Output() instantBuyId = new EventEmitter<number>();
  @Output() addIdToCart = new EventEmitter<number>();

  discountPrice() {
    return (
      this.product.price -
      (this.product.price * this.product.discountPercentage) / 100
    );
  }

  instantBuy(id: number) {
    this.instantBuyId.emit(id);
  }

  addToCart(id: number) {
    this.addIdToCart.emit(id);
  }
}
