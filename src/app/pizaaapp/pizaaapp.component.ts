import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-pizaaapp',
  templateUrl: './pizaaapp.component.html',
  styleUrls: ['./pizaaapp.component.css'],
})
export class PizaaappComponent {
  checked: boolean = false;
  checked1: boolean = false;
  checked2: boolean = false;
  checked3: boolean = false;
  checked4: boolean = false;
  checked5: boolean = false;
  checked6: boolean = false;
  checked7: boolean = false;

  Isavailable = true;
  showtext = false;
  formdata!: FormGroup;
  submitted = false;
  avail=false
  condition1:any
  val:any
  firstname:any

  selectedCities: string[] = [];
  arrlist: any;

  constructor(
    private formBuilder: FormBuilder,
    private product: ProductService
  ) {}

  ngOnInit() {
    this.formdata = this.formBuilder.group({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      phoneno: new FormControl(
        '',
        (Validators.required,
        Validators.pattern('^[0-9]'),
        Validators.minLength(10),
        Validators.maxLength(10))
      ),
      street: new FormControl('', Validators.required),
      aptnumber: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      floor: new FormControl('', Validators.required),
    });
  }

  showsize() {}
  showtable() {
    this.Isavailable = true;
    this.avail = false  
   
  }

  get f() {
    return this.formdata.controls;
  }
  submit(formdata: any) {
    this.Isavailable = false;
    this.showtext = true;
    this.submitted = true;
    this.avail = true

    if(formdata.valid){

      this.submitted = true

    }

    console.log(this.formdata.value);
    console.warn('message');
    this.submit = this.formdata.value;

    console.warn("form details");
    console.warn(formdata);
    console.warn(this.formdata.value.firstname);

    
}
}