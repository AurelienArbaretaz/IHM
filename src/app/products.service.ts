import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  configUrl = 'assets/products.json';
 
  constructor(private http: HttpClient) { }

  loadProducts(){
    return this.http.get<Product[]>(this.configUrl);
  }
}

