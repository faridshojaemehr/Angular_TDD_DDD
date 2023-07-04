import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-create-customer></app-create-customer>
    <app-customer-list></app-customer-list>
  `,
})
export class MainComponent {
  constructor() {}
}
