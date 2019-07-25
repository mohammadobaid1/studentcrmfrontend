import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { Content } from '../../ui/interfaces/modal';



@Component({
  selector: 'app-listtransaction',
  templateUrl: './listtransaction.component.html',
  styleUrls: ['./listtransaction.component.scss']
})
export class ListtransactionComponent extends BasePageComponent implements OnInit, OnDestroy {
  tableData: any[];

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
          title: 'List Transactions'
        }
      ]
    };
      this.tableData = [];
  }

  ngOnInit() {
    super.ngOnInit();

     this.httpSv.listtransaction()
       .subscribe(data=>{
          console.log(JSON.stringify(data));
          var parsedata = JSON.parse(JSON.stringify(data));
          this.tableData = parsedata;
       },
       error=>{
         this.modal.open({
                        body: 'Error in fetching transactions . Please try later',
                        header: 'Transaction fetch error'
                      });  
       })

  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
