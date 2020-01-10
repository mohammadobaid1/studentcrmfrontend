import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { Content } from '../../ui/interfaces/modal';

@Component({
  selector: 'app-firstyearclass',
  templateUrl: './firstyearclass.component.html',
  styleUrls: ['./firstyearclass.component.scss']
})
export class FirstyearclassComponent extends BasePageComponent implements OnInit{

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
          title: 'First Year Pre-Engineering Class'
        }
      ]
    };
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
