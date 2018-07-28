import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="card">
      <app-card-one></app-card-one>
      <app-card-two></app-card-two>
    </div>
  `,
})

export class AppComponent { 
  constructor() { }
}