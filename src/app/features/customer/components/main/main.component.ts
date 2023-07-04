import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-create-customer
      data-cy="create-customer-component"
    ></app-create-customer>
    <app-customer-list></app-customer-list>
  `,
})
export class MainComponent {
  constructor() {}
}
