import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { AllForm } from '../forms/allforms';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-hsc-part1-pre-medicalstudentsdata',
  templateUrl: './hsc-part1-pre-medicalstudentsdata.component.html',
  styleUrls: ['./hsc-part1-pre-medicalstudentsdata.component.scss']
})
export class HscPart1PreMedicalstudentsdataComponent extends BasePageComponent implements OnInit {

  rows: any; 
  form: FormGroup;
  showmarksheet = true;
  marksheetdata : any;
  constructor(
   store: Store<IAppState>,
   httpSv: HttpService,
   private modal: TCModalService,
   private formclass : AllForm

 ) { 

   super(store, httpSv);

   this.pageData = {
     title: '',
     loaded: true,
     breadcrumbs: [
       {
        title: 'HSC Part 1 Class'
       }
     ]
   };



 }

 ngOnInit() {
   super.ngOnInit();
   this.httpSv.getPremedicalbatch()
     .subscribe(data=>{

       console.log("matric regular data",data);
       this.rows = data;
     });

      this.form = this.formclass.getninthform();
 }




search(){

   console.log(this.form.value);
   this.httpSv.searchninthsciencedata(this.form.value)
     .subscribe(data=>{
       console.log(data);
       this.rows = data;
     },
     error=>{
       console.log(error);
     })

 }

 showPDF(data){
  this.showmarksheet = true;
  this.marksheetdata = data;
 }
 isSuccessful(){
   this.showmarksheet = false;   
 }
 generatePdf(data){   
 var jsonstringfy = JSON.stringify(data);
 const documentDefinition = { content: jsonstringfy };
 pdfMake.createPdf(documentDefinition).download();
}

}
