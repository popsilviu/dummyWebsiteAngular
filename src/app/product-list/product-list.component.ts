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
  public event: any;
  public products: Product[];
  productsList = document.querySelector('.products-container');
  sortSelect = document.getElementById('sort-select');

  ngOnInit() {
    this.dataService.loadData().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  instantBuyId($event: any) {
    console.log($event);
    return;
  }

  addIdToCart($event: any) {
    this.shoppingCartService.addToCart($event);
  }
  handleSelect($event: any) {
    let select = $event.target;
    switch (select.value) {
      case 'priceAsc':
        this.products.sort((a: any, b: any) => {
          return a.price - b.price;
        });
        console.log(this.products);
        break;

      case 'priceDesc':
        this.products.sort((a: any, b: any) => {
          return b.price - a.price;
        });

        console.log(this.products);
        break;

      case 'A-Z':
        this.products.sort((a: any, b: any) => {
          a = a.title.toLowerCase();
          b = b.title.toLowerCase();
          return a > b ? 1 : -1;
        });

        console.log(this.products);
        break;

      case 'Z-A':
        this.products.sort((a: any, b: any) => {
          a = a.title.toLowerCase();
          b = b.title.toLowerCase();
          return a > b ? -1 : 1;
        });

        console.log(this.products);
        break;

      case 'ratingAsc':
        this.products.sort((a: any, b: any) => {
          return a.rating - b.rating;
        });

        console.log(this.products);
        break;

      case 'ratingDesc':
        this.products.sort((a: any, b: any) => {
          return b.rating - a.rating;
        });

        console.log(this.products);
        break;
      case 'default':
        this.products.sort((a: any, b: any) => {
          return a.id - b.id;
        });
        console.log(this.products);
        break;
    }
  }
}
