import { Component, OnInit , HostBinding, Input, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http/http.service';
import { Router } from '@angular/router';
import { TCModalService } from '../../../ui/services/modal/modal.service';
import { Content } from '../../../ui/interfaces/modal';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  viewalert:boolean=false;
  

  constructor(private fb: FormBuilder,private httpservice:HttpService,private router:Router,private modal: TCModalService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailaddress: ['', [Validators.required,Validators.email]],
      pass: ['', Validators.required]
    });
  }

  validationfail:boolean = false;


    login(){
    this.validationfail = false;
     if(this.loginForm.controls['emailaddress'].invalid || this.loginForm.controls['pass'].invalid){
       this.validationfail = true;
     }

    else {
      console.log("loginusername",this.loginForm.value.emailaddress);
      this.httpservice.loginuser(this.loginForm.value.emailaddress,this.loginForm.value.pass)
              .subscribe(data=>{
                console.log(data);
                this.httpservice.eventEmitter("userPage", "like", "userLabel", 1);
                this.router.navigateByUrl('/vertical/public');

              },
              error=>{
                console.log("error",error);
                //this.viewalert=true;
                this.modal.open({
                        body: 'username or passwaord is incorrect',
                        header: 'Login Error'
                      });
                    
              })


      }
}





}
