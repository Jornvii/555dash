import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetialComponent } from './detial/detial.component';
import { HistoryComponent } from './history/history.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReturnComponent } from './issue/return.component';
import { ListRequestComponent } from './list-request/list-request.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestComponent } from './request/request.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'request', component: RequestComponent },
  { path: 'list-request', component: ListRequestComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'calculate', component: CalculateComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'homepage', component: HomepageComponent },
  { path: 'return', component: ReturnComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'detial', component: DetialComponent },
  { path: 'detail', component: DetialComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'request', component: RequestComponent },
  { path: 'list-request', component: ListRequestComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'calculate', component: CalculateComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'homepage', component: HomepageComponent },
  { path: 'return', component: ReturnComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'detial', component: DetialComponent },
  { path: 'detail', component: DetialComponent },

  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'request', component: RequestComponent, canActivate: [AuthGuard] },
  // { path: 'list-request', component: ListRequestComponent, canActivate: [AuthGuard] },
  // { path: 'confirm', component: ConfirmComponent, canActivate: [AuthGuard] },
  // { path: 'calculate', component: CalculateComponent, canActivate: [AuthGuard] },
  // { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  // { path: 'register', component: RegisterComponent},
  // { path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard] },
  // { path: 'return', component: ReturnComponent, canActivate: [AuthGuard] },
  // { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  // { path: 'detial', component: DetialComponent, canActivate: [AuthGuard] },
  // { path: 'detail', component: DetialComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}




// import { LoginComponent } from './login/login.component';
// import { RouterModule, Routes } from '@angular/router';
// import { RequestComponent } from './request/request.component';
// import { AdminComponent } from './admin/admin.component';
// import { CalculateComponent } from './calculate/calculate.component';
// import { ConfirmComponent } from './confirm/confirm.component';
// import { ListRequestComponent } from './list-request/list-request.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { RegisterComponent } from './register/register.component';
// import { HomepageComponent } from './homepage/homepage.component';
// import { ReturnComponent } from './issue/return.component';
// import { HistoryComponent } from './history/history.component';
// import { DetialComponent } from './detial/detial.component';

// const routes: Routes = [
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'request', component: RequestComponent },
//   { path: 'list-request', component: ListRequestComponent },
//   { path: 'confirm', component: ConfirmComponent },
//   { path: 'calculate', component: CalculateComponent },
//   { path: 'admin', component: AdminComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'homepage', component: HomepageComponent },
//   { path: 'return', component: ReturnComponent },
//   { path: 'history', component: HistoryComponent },
//   { path: 'detial', component: DetialComponent },
//   { path: 'detail', component: DetialComponent }, // Define a route with a parameter (e.g., id)

//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
// ];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
