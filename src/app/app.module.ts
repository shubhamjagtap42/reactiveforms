import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule,RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';
import { PizaaappComponent } from './pizaaapp/pizaaapp.component';
import {CheckboxModule} from 'primeng/checkbox';
import { SmallComponent } from './pizaaapp/small/small.component';
import { MediumComponent } from './pizaaapp/medium/medium.component';
import { LargeComponent } from './pizaaapp/large/large.component';
import { JobportalComponent } from './jobportal/jobportal.component';
import {DropdownModule} from 'primeng/dropdown';
import { CalendarModule } from "primeng/calendar";
import {HttpClientModule,HttpClient} from '@angular/common/http'; // importing the http module
import {TableModule} from 'primeng/table';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { DesignService } from './services/design.service';









@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    RoutingComponent,
    Form2Component,
    Form3Component,
    ProductComponent,
    PizaaappComponent,
    SmallComponent,
    MediumComponent,
    LargeComponent,
    JobportalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    CalendarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    
    
  ],
  providers: [ProductService,DesignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
