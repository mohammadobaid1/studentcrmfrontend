import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerticalLayoutComponent } from '../layout/vertical';
import { HorizontalLayoutComponent } from '../layout/horizontal';
import { PublicLayoutComponent } from '../layout/public';

import { MainPageComponentnt } from '../pages/main';
import { Page404Component } from '../pages/page-404';
import { SigninComponent } from '../pages/signin/signin.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { EditaccountComponent } from '../pages/editaccount';
import { PagesettingsComponent } from '../pages/pagesettings';
import { UsersComponent } from '../pages/users';
import { AuthGuardService } from '../services/AuthGuard/auth-guard.service';
import { PassswordresetComponent } from '../pages/passswordreset/passswordreset.component';
import { VerifynewpasswordComponent } from '../pages/verifynewpassword/verifynewpassword.component';
import { NinthclassComponent } from '../pages/ninthclass/ninthclass.component';
import { MatricclassComponent } from '../pages/matricclass/matricclass.component';
import { FirstyearclassComponent } from '../pages/firstyearclass/firstyearclass.component';
import { SecondyearclassComponent } from '../pages/secondyearclass/secondyearclass.component';
import { SchoolComponent } from '../pages/school/school.component';
import { NinthstudentdataComponent } from '../pages//ninthstudentdata/ninthstudentdata.component';
import { MatricstudentdataComponent } from '../pages/matricstudentdata/matricstudentdata.component';
import { FirstyearstudentdataComponent } from '../pages/firstyearstudentdata/firstyearstudentdata.component';
import { SecondyearstudentdataComponent } from '../pages/secondyearstudentdata/secondyearstudentdata.component';


const VERTICAL_ROUTES: Routes = [
  { path: 'main', component:  MainPageComponentnt },
  { path: 'ninthclass', component: NinthclassComponent},
  { path: 'matricclass', component: MatricclassComponent},
  { path: 'firstyearclass', component: FirstyearclassComponent},
  { path: 'secondyearclass', component: SecondyearclassComponent},
  { path: 'ninthstudentdata', component: NinthstudentdataComponent},
  { path: 'matricstudentdata', component: MatricstudentdataComponent},
  { path: 'firstyearstudentdata', component: FirstyearstudentdataComponent},
  { path: 'secondyearstudentdata', component: SecondyearstudentdataComponent},
  { path: 'schools', component: SchoolComponent},
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
  },
   {
    path: 'reset',
    component: PassswordresetComponent
  }
];

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/public/login',
    pathMatch: 'full'
  },
  

  {
    path: 'reset/:resettoken',
    component: VerifynewpasswordComponent 

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
