import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerticalLayoutComponent } from '../layout/vertical';
import { HorizontalLayoutComponent } from '../layout/horizontal';
import { PublicLayoutComponent } from '../layout/public';

import { MainPageComponentnt } from '../pages/main';
import { Page404Component } from '../pages/page-404';
import { SigninComponent } from '../pages/signin/signin.component';
import { SignupComponent } from '../pages/signup/signup.component';

import { PagesettingsComponent } from '../pages/pagesettings';
import { AuthGuardService } from '../services/AuthGuard/auth-guard.service';
import { AdminGuardService } from '../services/AuthGuard/auth-guard.service';


import { MatricclassComponent } from '../pages/matricclass/matricclass.component';
import { FirstyearclassComponent } from '../pages/firstyearclass/firstyearclass.component';
import { SecondyearclassComponent } from '../pages/secondyearclass/secondyearclass.component';
import { SchoolComponent } from '../pages/school/school.component';
// import { NinthstudentdataComponent } from '../pages//ninthstudentdata/ninthstudentdata.component';
import { MatricstudentdataComponent } from '../pages/matricstudentdata/matricstudentdata.component';
import { FirstyearstudentdataComponent } from '../pages/firstyearstudentdata/firstyearstudentdata.component';
import { SecondyearstudentdataComponent } from '../pages/secondyearstudentdata/secondyearstudentdata.component';


import { NinthcomputerclassComponent } from '../pages/ninthcomputerclass/ninthcomputerclass.component';
import { NinthcomputerstudentsdataComponent } from '../pages/ninthcomputerstudentsdata/ninthcomputerstudentsdata.component';

import { NinthbioclassComponent } from '../pages/ninthbioclass/ninthbioclass.component';
import { NinthbiostudentsdataComponent } from '../pages/ninthbiostudentsdata/ninthbiostudentsdata.component';


import { NinthprivateclassComponent } from '../pages/ninthprivateclass/ninthprivateclass.component';
import { NinthprivatestudentsdataComponent } from '../pages/ninthprivatestudentsdata/ninthprivatestudentsdata.component';


// import { NinthregularclassComponent } from '../pages/ninthregularclass/ninthregularclass.component';
// import { NinthregularstudentsdataComponent } from '../pages/ninthregularstudentsdata/ninthregularstudentsdata.component';

import { MatricscienceclassComponent } from '../pages/matricscienceclass/matricscienceclass.component';
import { MatricsciencestudentsdataComponent } from '../pages/matricsciencestudentsdata/matricsciencestudentsdata.component';


import { MatricregularclassComponent } from '../pages/matricregularclass/matricregularclass.component';
import { MatricregularstudentsdataComponent } from '../pages/matricregularstudentsdata/matricregularstudentsdata.component';


// import { MatricprivateclassComponent } from '../pages/matricprivateclass/matricprivateclass.component';
// import { MatricprivatestudentsdataComponent } from '../pages/matricprivatestudentsdata/matricprivatestudentsdata.component';

import { Ssc1sciencehomeComponent } from '../pages/ssc1sciencehome/ssc1sciencehome.component';
import { Ssc1generalhomeComponent } from '../pages/ssc1generalhome/ssc1generalhome.component';


import { Ssc2sciencehomeComponent } from '../pages/ssc2sciencehome/ssc2sciencehome.component';
import { Ssc2generalhomeComponent } from '../pages/ssc2generalhome/ssc2generalhome.component';


import { AdduserComponent } from '../pages/adduser/adduser.component';
import { UsermanagmentComponent } from '../pages/usermanagment/usermanagment.component';
import { UpdateuserComponent } from '../pages/updateuser/updateuser.component';
import { Hsc1sciencehomeComponent } from '../pages/hsc1sciencehome/hsc1sciencehome.component';
import { Hsc1generalhomeComponent } from '../pages/hsc1generalhome/hsc1generalhome.component';
import { HscPart1RegularPrivateclassComponent } from '../pages/hsc-part1-regular-privateclass/hsc-part1-regular-privateclass.component';
import { HscPart1RegularPrivatestudentsdataComponent } from '../pages/hsc-part1-regular-privatestudentsdata/hsc-part1-regular-privatestudentsdata.component';
import { HscPart1GeneralscienceclassComponent } from '../pages/hsc-part1-generalscienceclass/hsc-part1-generalscienceclass.component';
import { HscPart1GeneralsciencestudentsdataComponent } from '../pages/hsc-part1-generalsciencestudentsdata/hsc-part1-generalsciencestudentsdata.component';
import { HscPart1MedicaltechnologyclassComponent } from '../pages/hsc-part1-medicaltechnologyclass/hsc-part1-medicaltechnologyclass.component';
import { HscPart1MedicaltechnologystudentsdataComponent } from '../pages/hsc-part1-medicaltechnologystudentsdata/hsc-part1-medicaltechnologystudentsdata.component';
import { HscPart1PreEngineeringclassComponent } from '../pages/hsc-part1-pre-engineeringclass/hsc-part1-pre-engineeringclass.component';
import { HscPart1PreEngineeringstudentsdataComponent } from '../pages/hsc-part1-pre-engineeringstudentsdata/hsc-part1-pre-engineeringstudentsdata.component';
import { HscPart1PreMedicalclassComponent } from '../pages/hsc-part1-pre-medicalclass/hsc-part1-pre-medicalclass.component';
import { HscPart1PreMedicalstudentsdataComponent } from '../pages/hsc-part1-pre-medicalstudentsdata/hsc-part1-pre-medicalstudentsdata.component';


const VERTICAL_ROUTES: Routes = [
  { path: 'main', component:  MainPageComponentnt , canActivate: [AuthGuardService]},
   { path: 'sscscience', component: Ssc1sciencehomeComponent,canActivate: [AuthGuardService]},
   { path: 'sscgeneral', component: Ssc1generalhomeComponent,canActivate: [AuthGuardService]},

   //HSC PART1
   { path: 'hscs1science', component: Hsc1sciencehomeComponent,canActivate: [AuthGuardService]},
   
   { path: 'hscs1sciencegeneralscienceclass', component: HscPart1GeneralscienceclassComponent,canActivate: [AuthGuardService]},
   { path: 'hscs1sciencegeneralsciencedata', component: HscPart1GeneralsciencestudentsdataComponent,canActivate: [AuthGuardService]},
   
   { path: 'hscs1sciencemedicaltechnologyclass', component: HscPart1MedicaltechnologyclassComponent,canActivate: [AuthGuardService]},
   { path: 'hscs1sciencemedicaltechnologydata', component: HscPart1MedicaltechnologystudentsdataComponent,canActivate: [AuthGuardService]},
  
   { path: 'hscs1sciencepreengineeringclass', component: HscPart1PreEngineeringclassComponent,canActivate: [AuthGuardService]},
   { path: 'hscs1sciencepreengineeringdata', component: HscPart1PreEngineeringstudentsdataComponent,canActivate: [AuthGuardService]},
   
   { path: 'hscs1sciencepremedicalclass', component: HscPart1PreMedicalclassComponent,canActivate: [AuthGuardService]},
   { path: 'hscs1sciencepremedicaldata', component: HscPart1PreMedicalstudentsdataComponent,canActivate: [AuthGuardService]},
       
   { path: 'hsc1humanity', component: Hsc1generalhomeComponent,canActivate: [AuthGuardService]},
   { path: 'hsc1humanityregularprivateclass', component: HscPart1RegularPrivateclassComponent,canActivate: [AuthGuardService]},
   { path: 'hsc1humanityregularprivatedata', component: HscPart1RegularPrivatestudentsdataComponent,canActivate: [AuthGuardService]},
  


 
   { path: 'matriccience', component: Ssc2sciencehomeComponent,canActivate: [AuthGuardService]},
   { path: 'matricgeneral', component: Ssc2generalhomeComponent,canActivate: [AuthGuardService]},

  { path: 'ninthcomputerclass', component: NinthcomputerclassComponent,canActivate: [AuthGuardService]},
  { path: 'ninthcomputerdata', component: NinthcomputerstudentsdataComponent,canActivate: [AuthGuardService]},

  { path: 'ninthbioclass', component: NinthbioclassComponent,canActivate: [AuthGuardService]},
  { path: 'ninthbiodata', component: NinthbiostudentsdataComponent,canActivate: [AuthGuardService]},

  { path: 'ninthprivateclass', component: NinthprivateclassComponent,canActivate: [AuthGuardService]},
  { path: 'ninthprivatedata', component: NinthprivatestudentsdataComponent,canActivate: [AuthGuardService]},

  // { path: 'ninthregularclass', component: NinthregularclassComponent,canActivate: [AuthGuardService]},
  // { path: 'ninthregulardata', component: NinthregularstudentsdataComponent,canActivate: [AuthGuardService]},


  { path: 'matricscienceclass', component: MatricscienceclassComponent,canActivate: [AuthGuardService]},
  { path: 'matricsciencedata', component: MatricsciencestudentsdataComponent,canActivate: [AuthGuardService]},


  { path: 'matricregularclass', component: MatricregularclassComponent,canActivate: [AuthGuardService]},
  { path: 'matricregulardata', component: MatricregularstudentsdataComponent,canActivate: [AuthGuardService]},

  // { path: 'matricprivateclass', component: MatricprivateclassComponent,canActivate: [AuthGuardService]},
  // { path: 'matricprivatedata', component: MatricprivatestudentsdataComponent,canActivate: [AuthGuardService]},

  { path: 'usermanage', component: UsermanagmentComponent,canActivate: [AdminGuardService]},
  { path: 'adduser', component: AdduserComponent,canActivate: [AdminGuardService]},
  { path: 'updateuser/:id', component: UpdateuserComponent,canActivate: [AdminGuardService]},  

  { path: 'firstyearclass', component: FirstyearclassComponent,canActivate: [AuthGuardService]},
  { path: 'secondyearclass', component: SecondyearclassComponent,canActivate: [AuthGuardService]},
  // { path: 'ninthstudentdata', component: NinthstudentdataComponent,canActivate: [AuthGuardService]},
  { path: 'matricstudentdata', component: MatricstudentdataComponent,canActivate: [AuthGuardService]},
  { path: 'firstyearstudentdata', component: FirstyearstudentdataComponent,canActivate: [AuthGuardService]},
  { path: 'secondyearstudentdata', component: SecondyearstudentdataComponent,canActivate: [AuthGuardService]},
  { path: 'school/:id', component: SchoolComponent,canActivate: [AuthGuardService]},
  { path: '**', component: Page404Component,canActivate: [AuthGuardService] }


];

const PUBLIC_ROUTES: Routes = [
{
    path: 'login',
    component: SigninComponent
  }


];

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/vertical/main',
    pathMatch: 'full'
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
