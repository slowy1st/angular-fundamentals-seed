import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  // [innerHTML]'s -> tell angular that you want to dynamically bind to the actual source property
  // [] bind directly to the element
  // this is one-way binding only!
  template: `
    <div class='app'>
      <h1 [innerHTML]="title"></h1>
      <input type="text" [value]="name"/>
      <div>{{ name }}</div>
    </div>
  `
})

export class AppComponent {
  title: string;
  name: string = 'slowy';

  constructor() {
    this.title = 'Ultimate Angular';
  }
}
