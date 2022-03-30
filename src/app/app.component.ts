import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { productList } from './product/product-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Perfect App';
}
