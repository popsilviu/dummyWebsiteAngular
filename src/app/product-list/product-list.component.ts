import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private httpService: HttpService) {
    this.showProducts()
    console.log(this.products)
  }
  private products: any

  showProducts() {
    this.httpService.getProducts()
      .subscribe((data) => {
        console.log(data)
        this.products = data
      });
  }
}
