import { RouterModule, Routes } from '@angular/router';
import CustomerModule from './customer/customer.module';

const app_routes: Routes = [
  { path: 'customers/:id', loadChildren: () =>  CustomerModule },
  { path: '**', pathMatch:'full', redirectTo: '/customers' } //catch any unfound routes and redirect to home page
];

export const app_routing = RouterModule.forRoot(app_routes);
