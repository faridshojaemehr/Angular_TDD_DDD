import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () =>
      import('./features/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
  { path: '**', redirectTo: 'customer', pathMatch: 'full' },
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
];

export const AppRoutes = RouterModule.forRoot(routes);
