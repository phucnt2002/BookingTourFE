import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerDefaultComponent } from './layout/customer/customer-default/customer-default.component';
import { AdminDefaultComponent } from './layout/admin/admin-default/admin-default.component';
import { TourGuideDefaultComponent } from './layout/tour-guide/tour-guide-default/tour-guide-default.component';
import { ViewAllTourComponent } from './customer/view-all-tour/view-all-tour.component';
import { LeadTourComponent } from './tour-guide/lead-tour/lead-tour.component';
import { ViewAllCusComponent } from './admin/view-all-cus/view-all-cus.component';
import { BookTourComponent } from './customer/book-tour/book-tour.component';
import { BookedtourComponent } from './customer/bookedtour/bookedtour.component';
import { CreateTourComponent } from './admin/create-tour/create-tour.component';
import { ManageTourComponent } from './admin/manage-tour/manage-tour.component';

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
      {
        path: 'book-tour',
        component: BookTourComponent
      },
      {
        path: 'booked-tour',
        component: BookedtourComponent
      }
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
        path: 'create-tour',
        component: CreateTourComponent
      },
      {
        path: 'view-all-customer',
        component: ViewAllCusComponent
      },
      {
        path: 'manage-tour',
        component: ManageTourComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
