import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from 'src/app/core/events/entity/costumer-model/customer.interface';
import { CustomerRepositryService } from 'src/app/domain/services/repository/customer-repositry.service';
import { CustomerService } from '../../services/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {
  displayedColumns: string[] = [
    'Firstname',
    'Lastname',
    'DateOfBirth',
    'PhoneNumber',
    'Email',
    'BankAccountNumber',
    'action',
  ];
  customerDataSource: Observable<ICustomer[]>;

  constructor(
    private customerRepository: CustomerRepositryService,
    private dialog: MatDialog
  ) {
    this.customerDataSource = customerRepository._customers;
  }
  addCustomer() {
    this.dialog.open(CreateCustomerComponent, {
      width: '32rem',
      height: '32rem',
      hasBackdrop: true,
    });
  }
  deleteCustomer(row: ICustomer) {
    this.customerRepository.deleteCustomer(row.Email);
  }
  editCustomer(row: ICustomer) {
    this.dialog.open(CreateCustomerComponent, {
      data: row,
      width: '32rem',
      height: '32rem',
      hasBackdrop: true,
    });
  }
}
