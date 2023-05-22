import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  private data: any;
  constructor(private httpService: HttpService) {}
}
