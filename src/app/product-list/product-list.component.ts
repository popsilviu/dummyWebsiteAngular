import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private httpService: HttpService) {}
  public products: any;

  ngOnInit() {
    this.httpService.getProducts().subscribe((data) => this.products = data);
  }
}
