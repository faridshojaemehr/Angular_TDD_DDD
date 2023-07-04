import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerRepositryService } from 'src/app/domain/services/repository/customer-repositry.service';
import { CustomerService } from '../../services/customer.service';
import { ICustomer } from 'src/app/core/entity/costumer-model/customer.interface';

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
    private customerService: CustomerService
  ) {
    this.customerDataSource = customerRepository._customers;
  }

  deleteCustomer(row: ICustomer) {
    this.customerRepository.deleteCustomer(row.Email);
  }
  editCustomer(row: ICustomer) {
    this.customerService.editCustomer.next(row);
  }
}
