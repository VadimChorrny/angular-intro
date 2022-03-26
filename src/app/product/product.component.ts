import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { productList } from './product-list';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[];

  ngOnInit(): void {
    setTimeout(() => this.products = productList, 1500);
  }

}
