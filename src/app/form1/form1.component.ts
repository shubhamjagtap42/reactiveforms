import { Component,OnInit } from '@angular/core';
import { MyformService } from '../services/myform.service';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
  providers: [MessageService]
})
export class Form1Component {


  constructor(private myform:MyformService,private message:MessageService){}

  ngOnInit(){

    this.state = this.myform.state()
    console.log(this.state);
    
    // this.myform.state()

    // this.city = this.myform.city()
    // console.log(this.city);
    

  }
  onselect(state:any){

    console.log(state.target.value);
    

  }


  submit(){
    // console.log("submitted successfully");
    // alert("Entered Email Id :" +  data.emailid)

    this.onsubmit()
    
  }

  onsubmit(){
    this.message.add({severity:'success', key:'tl', summary: 'Success', detail: 'Your Data Submitted Successfully'});

  }

  state:any=[]
  city:any=[]


  

}
