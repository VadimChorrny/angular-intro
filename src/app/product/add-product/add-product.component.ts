import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { productList } from '../product-list';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {
  product: Product;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.maxLength(200)])],
      description: ['', Validators.compose([Validators.required, Validators.maxLength(200)])],
      price: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(100)])],
      amount: ['', Validators.compose([Validators.required, Validators.min(1)])],
    });

  }

  submit(): void {
    if (this.form.controls["title"].errors)
      alert("Invalid data!");
    else
      productList.push({
        id: this.form.controls['id'].value,
        title: this.form.controls['title'].value,
        description: this.form.controls['description'].value,
        status: Status.InProgress,
        price: this.form.controls['price'].value,
        rating: 0.1,
        createdDate: new Date('03/04/2022'),
        amount: this.form.controls['amount'].value,
      })

  }
}

enum Status {
  Active = "Active",
  Canceled = "Canceled",
  InProgress = "In Progress"
}
