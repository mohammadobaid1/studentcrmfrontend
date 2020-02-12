import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';

@Component({
  selector: 'app-matricstudentdata',
  templateUrl: './matricstudentdata.component.html',
  styleUrls: ['./matricstudentdata.component.scss']
})
export class MatricstudentdataComponent extends BasePageComponent implements OnInit  {
rows: any;
  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private modal: TCModalService

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
    // this.httpSv.getmatricbatch()
    //   .subscribe(data=>{
    //     this.rows = data;

    //   },error=>{
    //     console.log(error);
    //   })
  }




}
