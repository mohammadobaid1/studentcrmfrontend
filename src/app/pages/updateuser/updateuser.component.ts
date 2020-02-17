import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { AllForm } from '../forms/allforms';
import { Content } from '../../ui/interfaces/modal';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent extends BasePageComponent implements OnInit {


  userdata: any;
  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private modal: TCModalService,
    private forminstance: AllForm,
    private route: ActivatedRoute,
    private router: Router,
  ) { 

    super(store, httpSv);

    this.pageData = {
      title: '',
      loaded: true,
      breadcrumbs: [
        {
          title: 'Ninth Class'
        }
      ]
    };
  }

  ngOnInit() {
    super.ngOnInit();
  //   this.userdata = this.route.paramMap.pipe(
  //   switchMap((params: ParamMap) =>
  //     this.httpSv.getuserone(params.get('id'))
  //     .subscribe(data=>{
  //     	console.log(data);
  //     })

  //     )
    

  // );

   // console.log(this.userdata);

  }

}
