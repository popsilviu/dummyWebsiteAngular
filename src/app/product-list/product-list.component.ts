import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Product } from '../models/product.model';
import { ShoppingCartService } from '../services/shopping-cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private shoppingCartService: ShoppingCartService
  ) {}
  public products: Product[];

  ngOnInit() {
    this.dataService.loadData().subscribe((data) => {
      this.products = data;
    });
  }

  instantBuyId($event: any) {
    console.log($event);
    return;
  }

  addIdToCart($event: any) {
    this.shoppingCartService.addToCart($event);
  }
}
