import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ReactiveForms';

  Isavailable = false;
 

  show() {
    this.Isavailable = !this.Isavailable;
  }
}
