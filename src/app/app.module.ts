import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SubscriptionDirective } from './shared/dirctives/subscription.directive';
import { MaterialModule } from './shared/material-modules/material.module';
import { CustomerModule } from './features/customer/customer.module';
import { CustomerService } from './features/customer/services/customer.service';
import { ToastService } from './shared/services/ToastService/toast-service.service';

@NgModule({
  declarations: [AppComponent, SubscriptionDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CustomerModule,
    AppRoutes,
  ],
  providers: [CustomerService, ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
