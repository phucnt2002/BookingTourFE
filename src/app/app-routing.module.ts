import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerDefaultComponent } from './layout/customer/customer-default/customer-default.component';
import { AdminDefaultComponent } from './layout/admin/admin-default/admin-default.component';
import { TourGuideDefaultComponent } from './layout/tour-guide/tour-guide-default/tour-guide-default.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // {
  //   path: 'customer',
  //   component: CustomerDefaultComponent,
  //   children: [
  //     {
  //       // path: 'view-list-customer',
  //       // component: 
  //     },
  //   ]
  // },
  // {
  //   path: 'tourguide',
  //   component: TourGuideDefaultComponent,
  //   children: [
  //     {
  //       // path: 'view-list-customer',
  //       // component: 
  //     },
  //   ]
  // },
  // {
  //   path: 'admin',
  //   component: AdminDefaultComponent,
  //   children: [
  //     {
  //       // path: 'view-list-customer',
  //       // component: 
  //     },
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
