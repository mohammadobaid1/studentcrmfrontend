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
  selector: 'app-hsc-part1-generalsciencestudentsdata',
  templateUrl: './hsc-part1-generalsciencestudentsdata.component.html',
  styleUrls: ['./hsc-part1-generalsciencestudentsdata.component.scss']
})
export class HscPart1GeneralsciencestudentsdataComponent extends BasePageComponent implements OnInit {

  rows: any; 
  form: FormGroup;
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
   this.httpSv.getmatricregularbatch()
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

 generatePdf(data){
   console.log(data);
   var jsonstringfy = JSON.stringify(data);
 const documentDefinition = { content: jsonstringfy };
 pdfMake.createPdf(documentDefinition).download();
}




}
