import { Component, OnDestroy, OnInit, HostBinding, Input, ElementRef } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { Content } from '../../ui/interfaces/modal';



@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.scss']
})
export class EditaccountComponent extends BasePageComponent implements OnInit, OnDestroy {
submitForm: FormGroup;

   constructor(
    store: Store<IAppState>,
    httpSv: HttpService,private fb:FormBuilder,private modal: TCModalService
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
      this.submitForm = this.fb.group({
      currentpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });

  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }



  submit(){

    if(this.submitForm.value.newpassword != this.submitForm.value.confirmpassword){
      this.modal.open({
                        body: 'Password not matchers',
                        header: 'Password matching error'
                      });  
    }

      else {
        this.httpSv.changepassword(this.submitForm.value.currentpassword,this.submitForm.value.newpassword)
          .subscribe(data=>{
              this.modal.open({
                        body: 'Password successfully changed',
                        header: 'Password changed'
                      });


          },error=>{
            this.modal.open({
                        body: 'Password not changed . Please try again later',
                        header: 'Password change error'
                      });  
          })

      }

  }

}
