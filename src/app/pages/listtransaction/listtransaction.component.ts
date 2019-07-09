import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';


@Component({
  selector: 'app-listtransaction',
  templateUrl: './listtransaction.component.html',
  styleUrls: ['./listtransaction.component.scss']
})
export class ListtransactionComponent extends BasePageComponent implements OnInit, OnDestroy {
  tableData: any[];

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
          title: 'List Transactions'
        }
      ]
    };
      this.tableData = [];
  }

  ngOnInit() {
    super.ngOnInit();
 //   this.getData('assets/data/table-sorting.json', 'tableData');
     this.httpSv.listtransaction()
       .subscribe(data=>{
          console.log(JSON.stringify(data));
          var parsedata = JSON.parse(JSON.stringify(data));
         // this.getData(parsedata, 'tableData');
         this.tableData = parsedata;
       },
       error=>{
         console.log(error);
       })

  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
