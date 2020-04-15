import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class='app'>
      {{ title + '!'}}
      <div>
        <div>
        {{ numberOne }}
        {{ numberTwo }}
        </div>

        <div>
        {{ numberOne + numberOne }}
        </div>
        <div>
          {{ isHappy ? ':-)' : ':('}}
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;

  constructor() {
    this.title = 'Ultimate Angular';
  }
}
