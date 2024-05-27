// import { IssueComponent } from './issue/issue.component';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LastFewTransactionsComponent } from './last-few-transactions/last-few-transactions.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MaterialModule } from './material.module';
import { RegisterComponent } from './register/register.component';
import { RequestComponent } from './request/request.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    LastFewTransactionsComponent,
    FooterComponent,
    RequestComponent,
    ConfirmComponent,
    CalculateComponent,
    AdminComponent,
    DashboardComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    AsyncPipe,
    MatAutocompleteModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
