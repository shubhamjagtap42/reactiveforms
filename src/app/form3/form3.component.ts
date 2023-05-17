import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ProductService } from '../product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MyformService } from '../services/myform.service';
import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import {MessageService} from 'primeng/api';
import { DesignService } from '../services/design.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css'],
  providers: [MessageService]

})

export class Form3Component {

  formdata!: FormGroup;
  fname: any;
  lname: any;
  age: any;
  mobile: any;
  email: any;
  password: any;
  cpassword: any;
  submitted = false;
  dataedit: any;
  visible = false;
  arrlist1: [] = [];
  isparam = true
  isparam1 = false
  edititem:any;
  current:any

  conduct = ''

  constructor(
    private formBuilder: FormBuilder,
    private myform:MyformService,
    private message:MessageService,
    private design:DesignService,
    
  ) {


     const userinfo = this.myform.addalluser()
    console.log(userinfo);
    
  }

  
  

  ngOnInit() {
    this.formdata = this.formBuilder.group({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', (Validators.required, Validators.email)),
      mobile: new FormControl('', Validators.required),
      password: new FormControl(
        '',
        (Validators.required, Validators.minLength(6))
      ),
      cpassword: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.formdata.controls;
  }

  submit() 
  {
    // console.log(this.formdata);
    this.submitted = true;

    this.myform.useradd(this.formdata.value).subscribe((data:any)=>
    {
      console.log(data);
      // this.arrlist1 = data
      this.displaydata()
      
    },
    (error: HttpErrorResponse) => {
      alert('something went wrong');
    }
    )
    this.isparam1 = true
    this.isparam = false
    this.message.add({severity:'success', key:'tl', summary: 'Success', detail: 'Your Data Submitted Successfully'});

   
  }
  onsubmit(){

  }
 displaydata()
 {
    this.myform.addalluser().subscribe((data:any)=>
    {
      console.log(data);
      this.arrlist1 = data
      
    })
    
 }
 show(){
  this.isparam = false
  this.isparam1 = true
  this.displaydata()
 }

 deletedata(id:any)
 {
  this.myform.deleteall(id).subscribe((data:any)=>
  {
    console.log(data);
    this.displaydata()
    
  })
 }

 upgrade(formdata:FormGroup)
 {
  this.myform.updateadduser(this.current,this.formdata.value).subscribe((data:any)=>
  {
    console.log(data);
    this.displaydata()
    this.isparam = false;
    this.isparam1 = true;
    
  })
  
 }
 update(id:any)
 {
  this.current = id
  this.myform.adduserbyid(id).subscribe((data:any)=>
  { 
     
    console.log(data);
    this.edititem = data;
    console.log(this.edititem);
  
    

    this.formdata.get('fname')?.patchValue(this.edititem.fname)
    this.formdata.get('lname')?.patchValue(this.edititem.lname)
    this.formdata.get('age')?.patchValue(this.edititem.age)
    this.formdata.get('mobile')?.patchValue(this.edititem.mobile)
    this.formdata.get('email')?.patchValue(this.edititem.email)

    
    this.isparam = true;
    this.isparam1 = false;
    this.visible = true;
  })
 }
 previous(){

  this.isparam = true
  this.isparam1 = false

 }
 deletealldata(){
  this.design.clkevent()
  this.myform.clickevent()

  this.conduct = this.design.conduct
  
 }
}
