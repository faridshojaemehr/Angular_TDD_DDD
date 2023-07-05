import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhoneNumberValidator } from 'src/app/core/_helpers/phone-number-regexps';
import {
  CustomerFormBtnType,
  ICustomer,
} from 'src/app/core/events/entity/costumer-model/customer.interface';
import { CustomerRepositryService } from 'src/app/domain/services/repository/customer-repositry.service';
import { SubscriptionDirective } from 'src/app/shared/dirctives/subscription.directive';
import { CustomerService } from '../../services/customer.service';
import { ToastService } from 'src/app/shared/services/ToastService/toast-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent
  extends SubscriptionDirective
  implements OnInit
{
  public customerForm: FormGroup;
  public submitResult?: number;
  public btnType: CustomerFormBtnType = 'insert';
  private editCustomerInfo?: ICustomer;

  constructor(
    private toastService: ToastService,
    private customerRepository: CustomerRepositryService,
    public dialogRef: MatDialogRef<CreateCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICustomer
  ) {
    super();

    this.customerForm = new FormGroup({
      Firstname: new FormControl('', [Validators.required]),
      Lastname: new FormControl('', [Validators.required]),
      DateOfBirth: new FormControl('', [Validators.required]),
      PhoneNumber: new FormControl('', [
        Validators.required,
        PhoneNumberValidator('US'),
      ]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      BankAccountNumber: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.setSubmitResultUndefined();
      this.btnType = 'edit';
      this.customerForm.patchValue(this.data);
      this.editCustomerInfo = this.data;
    }
  }

  private setSubmitResultUndefined() {
    this.submitResult = undefined;
  }
  private afterTokeSubmitRes() {
    if (this.submitResult === 409)
      this.toastService.onErrorMessage('The customer information is Duplicate');
    else {
      this.toastService.onSuccessMessage('Create Customer successfully');
      this.customerForm.reset();
      this.btnType = 'insert';
      this.dialogRef.close();
    }
  }
  private beforeSubmitForm() {
    if (this.customerForm.invalid) {
      this.toastService.onErrorMessage(
        'Please fill out the customer form correctly'
      );
      console.error('The customer form is not valid');

      return false;
    } else return true;
  }
  submitForm() {
    this.setSubmitResultUndefined();
    if (this.beforeSubmitForm()) {
      this.submitResult = this.customerRepository.createCustomer(
        this.customerForm.value as ICustomer
      );
      this.afterTokeSubmitRes();
    }
  }
  edit() {
    this.setSubmitResultUndefined();
    if (this.beforeSubmitForm()) {
      const customer = this.customerForm.value;
      customer.Email = this.editCustomerInfo?.Email;
      this.submitResult = this.customerRepository.updateCustomer(
        customer as ICustomer
      );
      this.afterTokeSubmitRes();
    }
  }
}
