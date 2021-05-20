import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'turmrechnen';
  startValue: any;
  height: any;
  result: any;

  public calc(): any {
    this.result = this.startValue * this.height;
    return this.result;
  }


}
