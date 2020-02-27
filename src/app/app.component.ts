import { Component } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'thecodedream';
  lastUpdated = new Date();
  now = this.lastUpdated;

  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

}
