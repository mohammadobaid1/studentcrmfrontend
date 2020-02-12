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
  selector: 'app-ninthregularstudentsdata',
  templateUrl: './ninthregularstudentsdata.component.html',
  styleUrls: ['./ninthregularstudentsdata.component.scss']
})
export class NinthregularstudentsdataComponent extends BasePageComponent implements OnInit {

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
