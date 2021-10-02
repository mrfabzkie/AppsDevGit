import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  p_firstNum = 0;
  p_secondNum = 0;
  result = 0;

  getFirstNum(value: string) {
    this.p_firstNum = parseInt(value);

    if (!isNaN(this.p_firstNum)) {
      console.log(this.p_firstNum);
    }
  }

  getSecNum(value: string) {
    this.p_secondNum = parseInt(value);

    if (!isNaN(this.p_secondNum)) {
      console.log(this.p_secondNum);
    }
  }

  onAdd() {
    this.result = this.p_firstNum + this.p_secondNum;
    console.log(this.result);
  }

  onSubtract() {
    this.result = this.p_firstNum - this.p_secondNum;
    console.log(this.result);
  }

  onMultiply() {
    this.result = this.p_firstNum * this.p_secondNum;
    console.log(this.result);
  }

  onDivide() {
    this.result = this.p_firstNum / this.p_secondNum;
    console.log(this.result);
  }
}
