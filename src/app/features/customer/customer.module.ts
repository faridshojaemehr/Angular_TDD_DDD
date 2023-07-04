import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from './services/customer.service';
import { MaterialModulesModule } from 'src/app/shared/material-modules/material-modules.module';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    CreateCustomerComponent,
    CustomerListComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModulesModule,
  ],
  providers: [CustomerService],
})
export class CustomerModule {}
