import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { Content } from '../../ui/interfaces/modal';
import {Router} from "@angular/router";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends BasePageComponent implements OnInit, OnDestroy {
  tableData: any[];
  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private modal: TCModalService,
    private router: Router
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

     this.httpSv.listusers()
     .subscribe(data=>{
       var parsedata = JSON.parse(JSON.stringify(data));
       this.tableData = parsedata;

     },
     error=>{
          this.modal.open({
                        body: 'Error in fetching users',
                        header: 'Error'
                      });

     })

  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }



   remove(tableRow: any) {

    this.httpSv.eventEmitter("AddUser", "Admin User adding other memebers", "Admin clicks on adding member", 1);
    this.httpSv.deleteuser(tableRow.email)
      .subscribe(data=>{

        this.modal.open({
                        body: 'User has been deleted from database',
                        header: 'User deleted'
                      });

        this.router.navigate(['/vertical/users'])

      },
      error=>{
          this.modal.open({
                        body: 'User is not deleted',
                        header: 'User deletion error'
                      });

      }
      )

  }

}
