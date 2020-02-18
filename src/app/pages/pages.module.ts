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
import { PagesettingsComponent } from './pagesettings';
import { MatricclassComponent } from './matricclass/matricclass.component';
import { FirstyearclassComponent } from './firstyearclass/firstyearclass.component';
import { SecondyearclassComponent } from './secondyearclass/secondyearclass.component';
import { SchoolComponent } from './school/school.component';
// import { NinthstudentdataComponent } from './ninthstudentdata/ninthstudentdata.component';
import { MatricstudentdataComponent } from './matricstudentdata/matricstudentdata.component';
import { FirstyearstudentdataComponent } from './firstyearstudentdata/firstyearstudentdata.component';
import { SecondyearstudentdataComponent } from './secondyearstudentdata/secondyearstudentdata.component';
import { AllForm } from './forms/allforms';
import { NinthcomputerclassComponent } from './ninthcomputerclass/ninthcomputerclass.component';
import { NinthcomputerstudentsdataComponent } from './ninthcomputerstudentsdata/ninthcomputerstudentsdata.component';
import { NinthbioclassComponent } from './ninthbioclass/ninthbioclass.component';
import { NinthbiostudentsdataComponent } from './ninthbiostudentsdata/ninthbiostudentsdata.component';
import { NinthprivateclassComponent } from './ninthprivateclass/ninthprivateclass.component';
import { NinthprivatestudentsdataComponent } from './ninthprivatestudentsdata/ninthprivatestudentsdata.component';
import { MatricscienceclassComponent } from './matricscienceclass/matricscienceclass.component';
import { MatricsciencestudentsdataComponent } from './matricsciencestudentsdata/matricsciencestudentsdata.component';
import { MatricregularclassComponent } from './matricregularclass/matricregularclass.component';
import { MatricregularstudentsdataComponent } from './matricregularstudentsdata/matricregularstudentsdata.component';
// import { MatricprivateclassComponent } from './matricprivateclass/matricprivateclass.component';
// import { MatricprivatestudentsdataComponent } from './matricprivatestudentsdata/matricprivatestudentsdata.component';
import { Ssc1sciencehomeComponent } from './ssc1sciencehome/ssc1sciencehome.component';
import { Ssc1generalhomeComponent } from './ssc1generalhome/ssc1generalhome.component';
import { Ssc2sciencehomeComponent } from './ssc2sciencehome/ssc2sciencehome.component';
import { Ssc2generalhomeComponent } from './ssc2generalhome/ssc2generalhome.component';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { UsermanagmentComponent } from './usermanagment/usermanagment.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    UIModule,
    LayoutModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSelectModule
    ],
  declarations: [
    BasePageComponent,
    MainPageComponentnt,
    Page404Component,
    SigninComponent,
    SignupComponent,
    PagesettingsComponent,
    MatricclassComponent,
    FirstyearclassComponent,
    SecondyearclassComponent,
    SchoolComponent,
    // NinthstudentdataComponent,
    MatricstudentdataComponent,
    FirstyearstudentdataComponent,
    SecondyearstudentdataComponent,
    NinthcomputerclassComponent,
    NinthcomputerstudentsdataComponent,
    NinthbioclassComponent,
    NinthbiostudentsdataComponent,
    NinthprivateclassComponent,
    NinthprivatestudentsdataComponent,
    MatricscienceclassComponent,
    MatricsciencestudentsdataComponent,
    MatricregularclassComponent,
    MatricregularstudentsdataComponent,
    // MatricprivateclassComponent,
    // MatricprivatestudentsdataComponent,
    Ssc1sciencehomeComponent,
    Ssc1generalhomeComponent,
    Ssc2sciencehomeComponent,
    Ssc2generalhomeComponent,
    UsermanagmentComponent,
    AdduserComponent,
    UpdateuserComponent,
    
  ],
  providers: [AllForm],
  exports: [ ],
  entryComponents: [ ]
})
export class PagesModule {}
