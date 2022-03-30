import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { productList } from './product-list';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnInit {

  @Input()
  products: Product[];

  activity: Status.Active;

  ngOnInit(): void {
    //setTimeout(() => this.products = productList, 1500);
  }

  removeProduct(index: number): void {
    this.products.splice(index, 1);
  }

  changeState(index: number): void {
    this.products[index].status = Status.Active;
  }
}
enum Status {
  Active = "Active",
  Canceled = "Canceled",
  InProgress = "In Progress"
}
