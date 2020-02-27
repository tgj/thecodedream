import { Component } from '@angular/core';
import set = Reflect.set;
import moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'thecodedream';
  today = new Date();
  lastUpdated = moment(this.today);
  now = this.today;

  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

}
