import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';

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
    httpSv: HttpService
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
       console.log(data);
        var fetchdata = JSON.parse(JSON.stringify(data));
        console.log(fetchdata);
        console.log(fetchdata.token);
        console.log(fetchdata.token[0].companytokens); 
        this.totaltokensleft=fetchdata.token[0].companytokens;

      },error=>{
        console.log(error);

      })

    this.httpSv.gettotalcertficates()
        .subscribe(data=>{
         var fetchdata  = JSON.parse(JSON.stringify(data)); 
         console.log(fetchdata.totaltransaction[0]);
        this.totalcertificates=fetchdata.totaltransaction[0].txcount;

      },error=>{
        console.log(error);

      })


  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
