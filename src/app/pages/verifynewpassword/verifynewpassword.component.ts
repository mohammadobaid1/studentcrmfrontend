import { Component, OnDestroy, OnInit, HostBinding, Input, ElementRef } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { Content } from '../../ui/interfaces/modal';
import {ActivatedRoute,Router, NavigationEnd} from "@angular/router";


@Component({
  selector: 'app-verifynewpassword',
  templateUrl: './verifynewpassword.component.html',
  styleUrls: ['./verifynewpassword.component.scss']
})
export class VerifynewpasswordComponent implements OnInit {

  setnewpasswordForm: FormGroup;
  verificationtoken:string;

  
  constructor(private fb: FormBuilder,private httpservice:HttpService,private router:Router,private modal: TCModalService,private route:ActivatedRoute) { }

  ngOnInit() {
  
  	this.setnewpasswordForm = this.fb.group({
  		 newpassword: ['', [Validators.required]]
  	});


  	this.route.params.subscribe(params=>{
  		this.verificationtoken = params.resettoken;
  	})



  }


  submit(){

  	console.log(this.verificationtoken);

  	this.httpservice.resetpasswordbytoken(this.verificationtoken,this.setnewpasswordForm.value.newpassword)
  		.subscribe(data=>{
  			console.log(data);
  			this.router.navigate(['/public/login']);

  		},
  		error=>{
  			this.modal.open({
                        body: 'Error occurred in password reset',
                        header: 'Password reset error'
                      });
  		})

  }


}
