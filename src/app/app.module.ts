import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutes } from './app.routing';
import { MaterialModule } from './shared/material-modules/material.module';
import { SubscriptionDirective } from './shared/dirctives/subscription.directive';

@NgModule({
  declarations: [AppComponent, SubscriptionDirective],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, AppRoutes],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
