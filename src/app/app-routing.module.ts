import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerDefaultComponent } from './layout/customer/customer-default/customer-default.component';
import { AdminDefaultComponent } from './layout/admin/admin-default/admin-default.component';
import { TourGuideDefaultComponent } from './layout/tour-guide/tour-guide-default/tour-guide-default.component';
import { ViewAllTourComponent } from './customer/view-all-tour/view-all-tour.component';
import { LeadTourComponent } from './tour-guide/lead-tour/lead-tour.component';
import { ViewAllCusComponent } from './admin/view-all-cus/view-all-cus.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'customer',
    component: CustomerDefaultComponent,
    children: [
      {
        path: 'view-all-tour',
        component: ViewAllTourComponent
      },
    ]
  },
  {
    path: 'tourguide',
    component: TourGuideDefaultComponent,
    children: [
      {
        path: 'view-list-customer',
        component: LeadTourComponent
      },
    ]
  },
  {
    path: 'admin',
    component: AdminDefaultComponent,
    children: [
      {
        path: 'view-all-customer',
        component: ViewAllCusComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
