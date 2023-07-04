import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from './services/customer.service';
import { MaterialModule } from 'src/app/shared/material-modules/material.module';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { MainComponent } from './components/main/main.component';
import { CustomerRoutes } from './customer.routing';

@NgModule({
  declarations: [CreateCustomerComponent, CustomerListComponent, MainComponent],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutes,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [CustomerService],
})
export class CustomerModule {}
