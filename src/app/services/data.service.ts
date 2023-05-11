import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: any;
  constructor(private httpService: HttpService) {}

  public loadData() {
    if (this.data) {
      return of(this.data);
    } else {
      return this.httpService
        .getProducts()
        .pipe(tap((data) => (this.data = data)));
    }
  }
}
