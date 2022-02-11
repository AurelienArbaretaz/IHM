import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  configUrl = 'assets/orders.json';
 
  constructor(private http: HttpClient) { }

  loadOrders(){
    return this.http.get<Order[]>(this.configUrl);
  }
}
