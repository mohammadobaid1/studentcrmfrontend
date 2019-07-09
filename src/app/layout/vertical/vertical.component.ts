import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { IAppState } from "../../interfaces/app-state";
import { BaseLayoutComponent } from '../base-layout/base-layout.component';
import { HttpService } from '../../services/http/http.service';
import { IOption } from '../../ui/interfaces/option';
import { Content } from '../../ui/interfaces/modal';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { IPatient } from '../../interfaces/patient';
import * as PatientsActions from '../../store/actions/patients.actions';
import * as SettingsActions from '../../store/actions/app-settings.actions';

@Component({
  selector: 'vertical-layout',
  templateUrl: './vertical.component.html',
  styleUrls: [
    '../base-layout/base-layout.component.scss',
    './vertical.component.scss'
  ]
})
export class VerticalLayoutComponent extends BaseLayoutComponent implements OnInit {
  patientForm: FormGroup;
  currentAvatar: string | ArrayBuffer;
  defaultAvatar: string;
  useraccessrole: any;
  constructor(
    store: Store<IAppState>,
    fb: FormBuilder,
    httpSv: HttpService,
    router: Router,
    elRef: ElementRef,
    private modal: TCModalService
  ) {
    super(store, fb, httpSv, router, elRef);
    this.httpSv.useraccessrole()
    .subscribe(data=>{
      console.log(data);
      this.useraccessrole=data;
    },
    error=>{
      console.log(error);
    }
    )

    this.defaultAvatar = 'assets/content/anonymous-400.jpg';
    this.currentAvatar = this.defaultAvatar;
  }

  ngOnInit() {
    super.ngOnInit();

    this.store.dispatch(new SettingsActions.Update({ layout: 'vertical' }));
  }

  // open modal window
  openModal<T>(body: Content<T>, header: Content<T> = null, footer: Content<T> = null, options: any = null) {
    this.initPatientForm();

    this.modal.open({
      body: body,
      header: header,
      footer: footer,
      options: options
    });
  }

  // close modal window
  closeModal() {
    this.modal.close();
    this.patientForm.reset();
    this.currentAvatar = this.defaultAvatar;
  }

  // upload new file
  onFileChanged(inputValue: any) {
    let file: File = inputValue.target.files[0];
    let reader: FileReader = new FileReader();

    reader.onloadend = () => {
      this.currentAvatar = reader.result;
    };

    reader.readAsDataURL(file);
  }

  // init form
  initPatientForm() {
    this.patientForm = this.fb.group({
      img: [],
      name: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
      useraccessrole: ['', Validators.required]

    });
  }

  // add new patient
  addPatient(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);
      var username= form.value.name;
      var email= form.value.email;
      var password= form.value.pass;
      var useraccessrole= form.value.useraccessrole;
      this.httpSv.addusertocompany(username,email,password,useraccessrole)
        .subscribe(data=>{
            this.closeModal();
            this.patientForm.reset();
        
        },error=>{
            console.log(error);    
        })

    }
  }
}
