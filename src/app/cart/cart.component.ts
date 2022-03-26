import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  title: string = 'My Cart Title';
  text: string = 'My sample text';

  disabled = false;

  imgUrl: string = 'https://cms-assets.tutsplus.com/uploads/users/34/posts/29165/preview_image/angular-js.png';

  ngOnInit(): void {
    setTimeout(() => {
      this.imgUrl = 'https://create-react-app.dev/img/logo-og.png';
      this.disabled = true;
    }, 3000);
  }

  getInfo(): string {
    return 'This is cart info'
  }

  changeTitle() {
    this.title = 'This is new title'
  }
}
