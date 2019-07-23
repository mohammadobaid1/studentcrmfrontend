import { Component, OnDestroy, OnInit, HostBinding, Input, ElementRef } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { Content } from '../../ui/interfaces/modal';



@Component({
  selector: 'app-issuecertificates',
  templateUrl: './issuecertificates.component.html',
  styleUrls: ['./issuecertificates.component.scss']
})
export class IssuecertificatesComponent extends BasePageComponent implements OnInit, OnDestroy {

submitForm: FormGroup;

constructor(store: Store<IAppState>,httpSv: HttpService,private fb:FormBuilder,private modal: TCModalService) {
    super(store, httpSv);

    this.pageData = {
      title: '',
      loaded: true,
      
    };
  }

  txid :any = '';

  ngOnInit() {
    super.ngOnInit();
      this.submitForm = this.fb.group({
      studentname: ['', Validators.required],
      fathername: ['', Validators.required],
      passingyear: ['', Validators.required],
      revocationyear: ['',Validators.required],
      discipline: ['',Validators.required],
      batch: ['',Validators.required],
      enrollmentnumber: ['',Validators.required]
    });

  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

	submit(){

		console.log(this.submitForm.value);
    this.httpSv.eventEmitter("IssuancePage", "Blockchain transaction", "User click on button to submit blockchain tx", 1);
		this.httpSv.postransaction(this.submitForm.value.studentname,this.submitForm.value.fathername,this.submitForm.value.passingyear,this.submitForm.value.revocationyear,this.submitForm.value.discipline,this.submitForm.value.batch,this.submitForm.value.enrollmentnumber)
			.subscribe(data=>{
				console.log(data);
				//var jsonparse = JSON.parse(data);
			    this.txid = data;
			    console.log(this.txid.txid);
				this.modal.open({
                        body: this.txid.txid,
                        header: 'Transaction Successful'
                      });	
			},
			error=>{
				console.log(error);
				this.modal.open({
                        body: 'Transaction error occured',
                        header: 'Error'
                      });
			})
	}

  
}
