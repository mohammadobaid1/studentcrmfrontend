import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { AllForm } from '../forms/allforms';
import { Content } from '../../ui/interfaces/modal';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ssc1sciencehome',
  templateUrl: './ssc1sciencehome.component.html',
  styleUrls: ['./ssc1sciencehome.component.scss']
})
export class Ssc1sciencehomeComponent extends BasePageComponent implements OnInit {

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
          title: 'Matric Class'
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

  insertsciencedata(){
  	this.router.navigateByUrl('vertical/ninthcomputerclass');
  }


	displaydata(){
		this.router.navigateByUrl('vertical/ninthcomputerdata');
	}


	insertbiodata(){
		this.router.navigateByUrl('vertical/ninthbioclass');

	}

	displaybiodata(){

		this.router.navigateByUrl('vertical/ninthbiodata');
	}
}
