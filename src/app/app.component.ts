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
  validHeight = true;

  public calc(): any {
    this.result = this.startValue * this.height;
    return this.result;
  }


  checkHeight(): any {
    if (this.height >= 2) {
      this.validHeight = true;
    } else {
      this.validHeight = false;
    }
  }
}
