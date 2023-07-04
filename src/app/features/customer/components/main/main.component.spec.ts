import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { MaterialModule } from 'src/app/shared/material-modules/material.module';
import { CustomerService } from '../../services/customer.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponent, CustomerListComponent, CreateCustomerComponent ],
      imports: [ MaterialModule, BrowserAnimationsModule ],
      providers: [ CustomerService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
