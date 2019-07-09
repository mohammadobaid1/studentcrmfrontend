import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';


@Component({
  selector: 'page-settings',
  templateUrl: './pagesettings.component.html',
  styleUrls: ['./pagesettings.component.scss']
})
export class PagesettingsComponent extends BasePageComponent implements OnInit, OnDestroy {

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
  }

  ngOnInit() {
    super.ngOnInit();

  }
  ngAfterViewInit() {
    this.setLoaded()
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

}
