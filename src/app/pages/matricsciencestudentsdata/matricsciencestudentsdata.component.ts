import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { AllForm } from '../forms/allforms';
import { Content } from '../../ui/interfaces/modal';
import * as csv from 'csvtojson';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-matricsciencestudentsdata',
  templateUrl: './matricsciencestudentsdata.component.html',
  styleUrls: ['./matricsciencestudentsdata.component.scss']
})
export class MatricsciencestudentsdataComponent extends BasePageComponent implements OnInit{

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
          title: 'Matric Class'
        }
      ]
    };



  }

  ngOnInit() {
    super.ngOnInit();
    
    this.httpSv.getmatricsciencebatch()
      .subscribe(data=>{
        
        this.rows = data;
      })

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
