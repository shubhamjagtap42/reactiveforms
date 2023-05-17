import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css'],
  providers: [ProductService],
})
export class Form2Component {
  arr: any[] = [];
  emailid: any;
  password: any;
  formdata: any;
  submitted = false;
  // formBuilder: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formdata = this.formBuilder.group({
      emailid: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  get f() {
    return this.formdata.controls;
  }

  submit(formdata: any) {
    this.submitted = true;
    this.emailid = formdata.emailid
    this.password = formdata.password
    this.arr = formdata.arr
    console.log((this.submitted = true));
  }
}
