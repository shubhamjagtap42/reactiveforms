import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ProductService } from '../product.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { first } from 'rxjs';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-jobportal',
  templateUrl: './jobportal.component.html',
  styleUrls: ['./jobportal.component.css'],
})
export class JobportalComponent implements OnInit {
  formdata!: FormGroup;
  Isemail = false;
  isdrop = false;
  general: [] = [];
  selectedcity1: [] = [];
  cities: City[] = [];
  isnext = false;
  isfinal = false;
  arrlist: any[] = [];
  skills: any[] = [];
  id: any;

  navigate: any;
  isparam1 = false;
  isparam = true;
  editdata: any;
  visible = false;
  value: any;
  currid:any

  @ViewChild('div') div!: ElementRef;
  row: any;

  constructor(
    private renderer: Renderer2,
    private product: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formdata = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      emailid: new FormControl('', (Validators.required, Validators.email)),
      phoneno: new FormControl('', Validators.required),
      program: new FormControl('', Validators.required),
      experiance: new FormControl('', Validators.required),
    });

    this.cities = [
      { name: 'email', code: 'em' },
      { name: 'phoneno', code: 'ph' },
    ];
  }

  submit() {
    this.Isemail = !this.Isemail;
    this.isdrop = true;
    this.isfinal = true;

    console.log(this.formdata.value);


    this.product.adduser(this.formdata.value).subscribe(
      (data: any) => {
        console.log(data, 'output');
        // this.router.navigate(['form1'])
      },
      (error: HttpErrorResponse) => {
        alert('something went wrong');
      }
    );

    // this.ngOnInit()
  }
  finalclick(formdata: any) {
    this.isnext = true;
    // const p: HTMLParagraphElement = this.renderer.createElement('p');
    // p.innerHTML = "add new"
    // this.renderer.appendChild(this.div.nativeElement, p)

    this.skills.push({ language: formdata.program });
  }
  deleterow(index: any) {
    // confirm('Do you want to delete');
    this.skills = this.skills.filter((item) => item !== index);
  }

  showjson() {
    this.isparam = true;
    this.isparam1 = false;
  }

  update(id: any) {
    // this.arrlist =data
    this.currid = id
    this.product.getAlluserByid(id).subscribe((data: any) => {
      this.editdata = data;
      console.log(this.editdata);

      this.formdata.get('firstname')?.patchValue(this.editdata.firstname);
      this.formdata.get('lastname')?.patchValue(this.editdata.lastname);
      this.formdata.get('emailid')?.patchValue(this.editdata.emailid);
      this.formdata.get('phoneno')?.patchValue(this.editdata.phoneno);
      this.formdata.get('program')?.patchValue(this.editdata.program);
      this.formdata.get('experiance')?.patchValue(this.editdata.experiance);
    });
    //   // this.arrlist = data;
    // this.router.navigate(['/job'])
    // this.ngOnInit()

    this.isparam = true;
    this.isparam1 = false;
    this.visible = true;
  }

  delete(id: any) {
    this.product.doAlldelete(id).subscribe(
      (data: any) => {
        console.log(data);
        // this.arrlist = data
        // this.display()

        this.display();
      },

      (error: HttpErrorResponse) => {
        console.log('something went wrong');
      }
    );
  }

  display() {
    this.product.getAlluser().subscribe(
      (data: any) => {
        console.log(data);
        this.arrlist = data;
      },
      (error: HttpErrorResponse) => {
        console.log('gone');
      }
    );
  }

  updatedata(formdata:FormGroup) {


    // console.log('id' + id);
    

    this.product
      .doAllupdate(this.currid, this.formdata.value)
      .subscribe((data: any) => {
        // this.formdata = data
        console.log(data);
        // console.log(this.formdata);
      });
      // this.isparam1 = true
      
      this.display();
    this.isparam = false;
    this.isparam1 = true;
     
  }

  data(){
    this.display();

    this.isparam = false;
    this.isparam1 = true;
    // this.visible = true
  }
}
