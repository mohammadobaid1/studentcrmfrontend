import { Component, OnInit , HostBinding, Input, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http/http.service';
import { Router } from '@angular/router';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { Content } from '../../ui/interfaces/modal';


@Component({
  selector: 'app-passswordreset',
  templateUrl: './passswordreset.component.html',
  styleUrls: ['./passswordreset.component.scss']
})
export class PassswordresetComponent implements OnInit {


 passwordresetForm: FormGroup;
 
  constructor(private fb: FormBuilder,private httpservice:HttpService,private router:Router,private modal: TCModalService) { }

  ngOnInit() {

  	this.passwordresetForm = this.fb.group({
      emailaddress: ['', [Validators.required,Validators.email]]
    });
  }


  submit(){


  	this.httpservice.passwordreset(this.passwordresetForm.value.emailaddress)
  		.subscribe(data=>{
  			this.modal.open({
                        body: 'Password reset process initiated . Please check your email',
                        header: 'Password reset initiated'
                      });
  		},
  		error=>{
  			this.modal.open({
                        body: 'Error occurred in password reset',
                        header: 'Password reset error'
                      });
  		})
  }

}
