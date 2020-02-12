import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { Content } from '../../ui/interfaces/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'page-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainPageComponentnt extends BasePageComponent implements OnInit, OnDestroy {


 rows: any;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private router : Router,
    private modal : TCModalService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: '',
      loaded: true,
      breadcrumbs: [
        {
          title: 'Main'
        }
      ]
    };
  }

  ngOnInit() {
    super.ngOnInit();


   this.httpSv.getallschool()
     .subscribe(data=>{
       this.rows = data;
     },
     error=>{
       console.log('Could not fetch any schools');
     })



  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }


  schooldetail(rowdata) {
    this.router.navigateByUrl('vertical/school/'+rowdata.value);
  }
}
