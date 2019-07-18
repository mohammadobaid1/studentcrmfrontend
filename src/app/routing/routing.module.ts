import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerticalLayoutComponent } from '../layout/vertical';
import { HorizontalLayoutComponent } from '../layout/horizontal';
import { PublicLayoutComponent } from '../layout/public';

import { MainPageComponentnt } from '../pages/main';
import { Page404Component } from '../pages/page-404';
import { SigninComponent } from '../pages/signin/signin.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { ListtransactionComponent } from '../pages/listtransaction';
import { IssuecertificatesComponent } from '../pages/issuecertificates';
import { EditaccountComponent } from '../pages/editaccount';
import { PagesettingsComponent } from '../pages/pagesettings';
import { UsersComponent } from '../pages/users';
import { AuthGuardService } from '../services/AuthGuard/auth-guard.service';
import { EmailverificationComponent } from '../pages/emailverification/emailverification.component';


const VERTICAL_ROUTES: Routes = [
  { path: 'main', component:  MainPageComponentnt ,canActivate: [AuthGuardService]},
  { path: 'transactions', component: ListtransactionComponent,canActivate: [AuthGuardService] },
  { path: 'issuecertificates', component: IssuecertificatesComponent,canActivate: [AuthGuardService] },
  { path: 'editaccount', component: EditaccountComponent,canActivate: [AuthGuardService] },
  { path: 'settings', component: PagesettingsComponent,canActivate: [AuthGuardService] },
  { path: 'users', component: UsersComponent ,canActivate: [AuthGuardService]},
  { path: '**', component: Page404Component,canActivate: [AuthGuardService] }


];

const PUBLIC_ROUTES: Routes = [
{
    path: 'login',
    component: SigninComponent
  },

  {
    path: 'signup',
    component: SignupComponent
  }
];

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/public/login',
    pathMatch: 'full'
  },
  {
    path: 'verify/:verificationtoken',
    component: EmailverificationComponent
  },
  
  {
    path: 'vertical',
    component: VerticalLayoutComponent,
    children: VERTICAL_ROUTES
  },
  {
    path: 'horizontal',
    component: HorizontalLayoutComponent,
    children: VERTICAL_ROUTES
  },
  {
    path: 'public',
    component: PublicLayoutComponent,
    children: PUBLIC_ROUTES
  },

  {
    path: '**',
    component: VerticalLayoutComponent,
    children: VERTICAL_ROUTES
  }


];

@NgModule({
  imports: [

  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
