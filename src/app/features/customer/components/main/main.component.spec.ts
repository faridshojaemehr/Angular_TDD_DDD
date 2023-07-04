import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';
import { MaterialModule } from 'src/app/shared/material-modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerService } from '../../services/customer.service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        CustomerListComponent,
        CreateCustomerComponent,
      ],
      imports: [MaterialModule, BrowserAnimationsModule],
      providers: [CustomerService],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
