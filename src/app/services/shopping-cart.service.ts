import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private products: Product[];
  public shoppingCartData: Array<any> = [];
  public productIdArray: number[] = [];

  constructor(private dataService: DataService) {}

  generateShoppingCartData() {
    if (this.products) {
      this.addItemsToShoppingCartData();
    } else {
      this.dataService.loadData().subscribe((data) => (this.products = data));
      this.addItemsToShoppingCartData();
    }
  }

  addItemsToShoppingCartData() {
    if (this.productIdArray) {
      const uniqueProductId = this.productIdArray.filter(
        (value, index, self) => {
          return self.indexOf(value) === index;
        }
      );
      uniqueProductId.forEach((id) => {
        if (this.products) {
          this.products.forEach((product) => {
            if (product.id === id) {
              if (!this.shoppingCartData.includes(product)) {
                this.shoppingCartData.push(product);
              }
            }
          });
        }
      });
    }
  }

  addToCart(id: number) {
    this.productIdArray.push(id);
    this.generateShoppingCartData();
  }
}
