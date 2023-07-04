import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICustomer } from 'src/app/core/entity/costumer-model/customer.interface';

@Injectable()
export class CustomerService {
  public editCustomer: Subject<ICustomer> = new Subject();
  constructor() {}
}
