import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends BasePageComponent implements OnInit, OnDestroy {
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
          title: ''
        }
      ]
    };
    this.tableData = [];
     
  }

  ngOnInit() {
    super.ngOnInit();
    // this.getData('assets/data/table-sorting.json', 'tableData');
     this.httpSv.listusers()
     .subscribe(data=>{
       var parsedata = JSON.parse(JSON.stringify(data));
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
