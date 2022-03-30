import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { productList } from './product/product-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  heightPrice: Product[];
  lowPrice: Product[];

  ngOnInit(): void {
    setTimeout(() => {
      this.heightPrice = productList.filter((p) => p.price > 30);
      this.lowPrice = productList.filter((p) => p.price < 30);
    }, 1000);
  }
}
