import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerSidebarComponent } from './shared/components/customer/customer-sidebar/customer-sidebar.component';
import { AdminSidebarComponent } from './shared/components/admin/admin-sidebar/admin-sidebar.component';
import { TourGuideSidebarComponent } from './shared/components/tour-guide/tour-guide-sidebar/tour-guide-sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './login/login.component';
import { TourGuideDefaultComponent } from './layout/tour-guide/tour-guide-default/tour-guide-default.component';
import { AdminDefaultComponent } from './layout/admin/admin-default/admin-default.component';
import { CustomerDefaultComponent } from './layout/customer/customer-default/customer-default.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ViewAllTourComponent } from './customer/view-all-tour/view-all-tour.component';
import { ViewAllCusComponent } from './admin/view-all-cus/view-all-cus.component';
import { LeadTourComponent } from './tour-guide/lead-tour/lead-tour.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge'
@NgModule({
  declarations: [
    AppComponent,
    CustomerSidebarComponent,
    AdminSidebarComponent,
    TourGuideSidebarComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    TourGuideDefaultComponent,
    AdminDefaultComponent,
    CustomerDefaultComponent,
    ViewAllTourComponent,
    ViewAllCusComponent,
    LeadTourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
