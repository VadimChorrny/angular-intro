import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { productList } from '../product/product-list';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Input()
  products: Product[];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.products = productList, 1500);
  }

  createProduct() {
  }
}

enum Status {
  Active = "Active",
  Canceled = "Canceled",
  InProgress = "In Progress"
}
