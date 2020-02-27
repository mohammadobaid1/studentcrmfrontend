import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { AllForm } from '../forms/allforms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hsc1sciencehome',
  templateUrl: './hsc1sciencehome.component.html',
  styleUrls: ['./hsc1sciencehome.component.scss']
})
export class Hsc1sciencehomeComponent extends BasePageComponent implements OnInit {

  rows: any;
  form: FormGroup;
  constructor(
   store: Store<IAppState>,
   httpSv: HttpService,
   private modal: TCModalService,
   private formclass : AllForm,
   private router: Router

 ) { 

   super(store, httpSv);

   this.pageData = {
     title: '',
     loaded: true,
     breadcrumbs: [
       {
        title: 'HSC Part 1 Class'
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


 displaydata(type){
   this.router.navigateByUrl('vertical/'+type);
 }

 insertdata(type){
   this.router.navigateByUrl('vertical/'+type);
 }
}