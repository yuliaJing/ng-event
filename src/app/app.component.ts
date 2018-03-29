import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showMessage: string;

  onNotifyClicked(message: string){
    this.showMessage = message;
  }
}
