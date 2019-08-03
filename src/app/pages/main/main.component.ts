import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { Content } from '../../ui/interfaces/modal';


@Component({
  selector: 'page-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainPageComponentnt extends BasePageComponent implements OnInit, OnDestroy {


 totalcertificates:any;
 totaltokensleft:any;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private modal : TCModalService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: '',
      loaded: true,
      breadcrumbs: [
        {
          title: 'Main'
        }
      ]
    };
  }

  ngOnInit() {
    super.ngOnInit();
    this.httpSv.gettokenleft()
      .subscribe(data=>{

        var fetchdata = JSON.parse(JSON.stringify(data));
        this.totaltokensleft=fetchdata.token[0].companytokens;

      },error=>{
          this.modal.open({
                        body: 'Error in fetching remaining tokens',
                        header: 'Error'
                      });  

      })

    this.httpSv.gettotalcertficates()
        .subscribe(data=>{
         var fetchdata  = JSON.parse(JSON.stringify(data)); 
        this.totalcertificates=fetchdata.totaltransaction[0].txcount;

      },error=>{
            this.modal.open({
                        body: 'Error in fetching total transactions',
                        header: 'Error'
                      });  

      })


  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
