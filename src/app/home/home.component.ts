import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { productList } from '../product/product-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  heightPrice: Product[];
  lowPrice: Product[];

  ngOnInit(): void {
    setTimeout(() => {
      this.heightPrice = productList.filter((p) => p.price > 30);
      this.lowPrice = productList.filter((p) => p.price < 30);
    }, 1000);
  }

}
