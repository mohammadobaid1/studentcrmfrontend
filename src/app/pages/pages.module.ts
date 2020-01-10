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
import { EditaccountComponent } from './editaccount';
import { PagesettingsComponent } from './pagesettings';
import { UsersComponent } from './users';
import { EmailverificationComponent } from './emailverification/emailverification.component';
import { PassswordresetComponent } from './passswordreset/passswordreset.component';
import { VerifynewpasswordComponent } from './verifynewpassword/verifynewpassword.component';
import { NinthclassComponent } from './ninthclass/ninthclass.component';
import { MatricclassComponent } from './matricclass/matricclass.component';
import { FirstyearclassComponent } from './firstyearclass/firstyearclass.component';
import { SecondyearclassComponent } from './secondyearclass/secondyearclass.component';
import { SchoolComponent } from './school/school.component';
import { NinthstudentdataComponent } from './ninthstudentdata/ninthstudentdata.component';
import { MatricstudentdataComponent } from './matricstudentdata/matricstudentdata.component';
import { FirstyearstudentdataComponent } from './firstyearstudentdata/firstyearstudentdata.component';
import { SecondyearstudentdataComponent } from './secondyearstudentdata/secondyearstudentdata.component';
import { AllForm } from './forms/allforms';
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
    EditaccountComponent,
    PagesettingsComponent,
    UsersComponent,
    EmailverificationComponent,
    PassswordresetComponent,
    VerifynewpasswordComponent,
    NinthclassComponent,
    MatricclassComponent,
    FirstyearclassComponent,
    SecondyearclassComponent,
    SchoolComponent,
    NinthstudentdataComponent,
    MatricstudentdataComponent,
    FirstyearstudentdataComponent,
    SecondyearstudentdataComponent,
    
  ],
  providers: [AllForm],
  exports: [ ],
  entryComponents: [ ]
})
export class PagesModule {}
