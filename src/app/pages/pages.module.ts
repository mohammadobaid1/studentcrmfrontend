import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { LayoutModule } from '../layout/layout.module';
import { BasePageComponent } from './base-page';

import { MainPageComponentnt } from './main';
import { Page404Component } from './page-404';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ListtransactionComponent } from './listtransaction';
import { IssuecertificatesComponent } from './issuecertificates';
import { EditaccountComponent } from './editaccount';
import { PagesettingsComponent } from './pagesettings';
import { UsersComponent } from './users';
import { EmailverificationComponent } from './emailverification/emailverification.component';
import { PassswordresetComponent } from './passswordreset/passswordreset.component';
import { VerifynewpasswordComponent } from './verifynewpassword/verifynewpassword.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    UIModule,
    LayoutModule
  ],
  declarations: [
    BasePageComponent,
    MainPageComponentnt,
    Page404Component,
    SigninComponent,
    SignupComponent,
    ListtransactionComponent,
    IssuecertificatesComponent,
    EditaccountComponent,
    PagesettingsComponent,
    UsersComponent,
    EmailverificationComponent,
    PassswordresetComponent,
    VerifynewpasswordComponent
  ],
  exports: [ ],
  entryComponents: [ ]
})
export class PagesModule {}
