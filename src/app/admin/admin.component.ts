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
    this.products.push({
      title: 'Test data',
      description: '10% fat content, for cooking',
      status: Status.Canceled,
      price: 56,
      rating: 2.3,
      createdDate: new Date('03/04/2022'),
      amount: 22,
    })
  }
}

enum Status {
  Active = "Active",
  Canceled = "Canceled",
  InProgress = "In Progress"
}
