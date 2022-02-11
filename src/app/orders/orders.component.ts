import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  selectedOrder?:Order;
  orders : Observable<Order[]> | undefined;

  constructor(private ordersService : OrdersService) { }

  ngOnInit(): void {
    this.showUsers();  
  }

  showUsers(){
    this.orders=this.ordersService.loadOrders();
  }

  onSelect(product: Order): void {
    this.selectedOrder = product;
  }


}
