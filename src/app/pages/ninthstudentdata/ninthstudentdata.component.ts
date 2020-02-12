import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
@Component({
  selector: 'app-ninthstudentdata',
  templateUrl: './ninthstudentdata.component.html',
  styleUrls: ['./ninthstudentdata.component.scss']
})
export class NinthstudentdataComponent extends BasePageComponent implements OnInit {

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
          title: 'Ninth Class'
        }
      ]
    };

    

 
   }

  ngOnInit() {
    super.ngOnInit();
    this.httpSv.getninthbiobatch()
      .subscribe(data=>{
        console.log("ninth data",data);
        this.rows = data;
      })



  }

   decidecolor(rows){
        console.log("Function calls",rows);
      }

}
