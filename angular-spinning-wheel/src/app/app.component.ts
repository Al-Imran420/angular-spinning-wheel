import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show: any;
  showAlert: boolean = false;
  playGame() {
    let x = 1024;
    let y = 9999;
    let arr = [10, 20, 30, 40, 50, 60, 70, 80];
    this.show = arr[Math.floor(Math.random() * arr.length)];
    let deg = Math.floor(Math.random() * (x - y)) + y;
    document.getElementById('box').style.transform = 'rotate(' + deg + 'deg)';
    setTimeout(() => {
      this.showAlert = true;
    }, 5000);
  }

  endGame() {
    this.showAlert = false;
  }
}
