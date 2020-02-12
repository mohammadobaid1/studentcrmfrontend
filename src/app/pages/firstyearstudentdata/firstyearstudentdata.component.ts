import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';

@Component({
  selector: 'app-firstyearstudentdata',
  templateUrl: './firstyearstudentdata.component.html',
  styleUrls: ['./firstyearstudentdata.component.scss']
})
export class FirstyearstudentdataComponent extends BasePageComponent implements OnInit {
  rows:any;
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
          title: 'First Year Batch'
        }
      ]
    };
   }

  ngOnInit() {
    super.ngOnInit();
    this.httpSv.getfirstyearbatch()
      .subscribe(data=>{
        this.rows = data;
      },error=>{
        console.log("Error",error);
      })
  }

}
