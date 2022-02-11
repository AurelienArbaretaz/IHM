import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  selectedProduct?:Product;
  products : Observable<Product[]> | undefined;

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.showUsers();  
  }

  showUsers(){
    this.products=this.productsService.loadProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
