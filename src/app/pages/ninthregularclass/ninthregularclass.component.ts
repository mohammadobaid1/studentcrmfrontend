import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { AllForm } from '../forms/allforms';
import { Content } from '../../ui/interfaces/modal';
import * as csv from 'csvtojson';


@Component({
  selector: 'app-ninthregularclass',
  templateUrl: './ninthregularclass.component.html',
  styleUrls: ['./ninthregularclass.component.scss']
})
export class NinthregularclassComponent extends BasePageComponent implements OnInit  {

   constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private modal: TCModalService,
    private formclass : AllForm

  ) { 

    super(store, httpSv);

    this.pageData = {
      title: '',
      loaded: true,
      breadcrumbs: [
        {
          title: 'Matric Class'
        }
      ]
    };



  }

  ngOnInit() {
    super.ngOnInit();
    // this.httpSv.getallschools()
    //   .subscribe(data=>{
    //     this.dropdowndata = data;
    //   })
    // this.form = this.formclass.getmatricclassform();
  }

}
