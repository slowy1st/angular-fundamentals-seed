import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  // this is still one way binding, but our events do the change
  template: `
    <div class='app'>
      <button (click)="handleClick($event)">Reset Name</button>
      <input
        type="text"
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)"/>
      <div>{{name}}</div>
    </div>
  `
})

export class AppComponent {
  name: string = 'slowy';

  constructor() {
  }

  handleClick($event: MouseEvent) {
    this.name = 'slowy';
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleBlur(event: any) {
    this.name = event.target.value;
  }
}
