import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { Content } from '../../ui/interfaces/modal';

@Component({
  selector: 'app-secondyearclass',
  templateUrl: './secondyearclass.component.html',
  styleUrls: ['./secondyearclass.component.scss']
})
export class SecondyearclassComponent extends BasePageComponent implements OnInit {

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
          title: 'Second year Class'
        }
      ]
    };
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
