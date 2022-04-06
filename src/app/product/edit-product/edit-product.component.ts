import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { productList } from '../product-list';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product: Product;
  form: FormGroup;

  // other for interpolation

  title: string;
  description: string;
  price: number;
  amount: number;

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.maxLength(200)])],
      description: ['', Validators.compose([Validators.required, Validators.maxLength(200)])],
      price: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(100)])],
      amount: ['', Validators.compose([Validators.required, Validators.min(1)])],
    });

    this.activatedRoute.params.subscribe(params => {
      console.log('You choose product with id ' + params['id']);

      var currentProduct = productList[params['id']];
      this.title = currentProduct.title;
      this.description = currentProduct.description;
      this.price = currentProduct.price;
      this.amount = currentProduct.amount;

      this.form.patchValue(this.product);
    });


  }

  submit(): void {
    if (this.form.controls["title"].errors)
      alert("Invalid data!");
    else
      this.activatedRoute.params.subscribe(params => {
        productList[params['id']] = {
          id: params['id'],
          title: this.form.controls['title'].value,
          description: this.form.controls['description'].value,
          status: Status.InProgress,
          price: this.form.controls['price'].value,
          rating: 0.1,
          createdDate: new Date('03/04/2022'),
          amount: this.form.controls['amount'].value,
        }
      })
    alert('Updated!')

    // Saving data... (request to edit genre)
    this.router.navigate(["/products/"]);
  }
}
enum Status {
  Active = "Active",
  Canceled = "Canceled",
  InProgress = "In Progress"
}
