import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dialog';
  constructor(private toastr: ToastrService) {}
  // tslint:disable-next-line: typedef
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  // tslint:disable-next-line: typedef
  showAlerts(){
    alert('123');
  }
  // tslint:disable-next-line: typedef
  showConfirm(){
    confirm('321');
  }
  // tslint:disable-next-line: typedef
  showPrompt(){
    prompt('456');
  }
}
