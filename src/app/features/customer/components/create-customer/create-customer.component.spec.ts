import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerComponent } from './create-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material-modules/material.module';
import { CustomerService } from '../../services/customer.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateCustomerComponent', () => {
  let component: CreateCustomerComponent;
  let fixture: ComponentFixture<CreateCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCustomerComponent],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [CustomerService],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
