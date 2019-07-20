import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http/http.service';
import { TCModalService } from '../../../ui/services/modal/modal.service';
import { Content } from '../../../ui/interfaces/modal';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,private httpservice:HttpService,private modal: TCModalService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyname: ['',Validators.required],
      pass: ['', Validators.required]
    });
  }
    validationfail:boolean = false;

    signup(){

      this.validationfail = false;
      if(this.registerForm.controls['name'].invalid ||  this.registerForm.controls['email'].invalid || this.registerForm.controls['companyname'].invalid || this.registerForm.controls['pass'].invalid )
          this.validationfail = true;

      else {  
      console.log(this.registerForm);
      this.httpservice.signupcompany(this.registerForm.value.name,this.registerForm.value.email,this.registerForm.value.companyname,this.registerForm.value.pass)
            .subscribe(data=>{
              console.log(data);
              this.modal.open({
                        body: 'Account created successfully . Confirmation link has been send to your email .',
                        header: 'Account Created'
                      });
            }
            ,
            error=>{
              console.log(error);
              this.modal.open({
                        body: 'Account creation failed . Please contact us at info@blockshift.com.pk',
                        header: 'Signup Error'
                      });
            })

          }

    }


}
