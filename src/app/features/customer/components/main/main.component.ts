import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div style="padding: 10rem;">
      <app-customer-list></app-customer-list>
    </div>
  `,
})
export class MainComponent {
  constructor() {}
}
