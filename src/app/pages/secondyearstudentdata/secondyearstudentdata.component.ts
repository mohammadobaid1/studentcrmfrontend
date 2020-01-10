import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';

@Component({
  selector: 'app-secondyearstudentdata',
  templateUrl: './secondyearstudentdata.component.html',
  styleUrls: ['./secondyearstudentdata.component.scss']
})
export class SecondyearstudentdataComponent  extends BasePageComponent implements OnInit {

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
          title: 'Schools '
        }
      ]
    };
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
