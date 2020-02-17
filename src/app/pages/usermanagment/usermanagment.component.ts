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
  selector: 'app-usermanagment',
  templateUrl: './usermanagment.component.html',
  styleUrls: ['./usermanagment.component.scss']
})
export class UsermanagmentComponent extends BasePageComponent implements OnInit {

  userslist: any;
  form: FormGroup;
  updateform: FormGroup;
  usertype: any;
  updatedata: any;
  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private modal: TCModalService,
    private forminstance: AllForm,
    private router: Router
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
    this.httpSv.getusers()
    	.subscribe(data=>{
    		console.log("data");
    		this.userslist = data;
    	},error=>{
    		console.log(error);
    	});

   this.form = this.forminstance.adduserform();
   this.updateform = this.forminstance.updateuserform();                         
   this.usertype = [

      {
        "label": "Admin",
        "value": "admin"
      },
      {
        "label": "Operator",
        "value": "operator"
      }

      ];

  }

  adduser(){
  	this.httpSv.adduser(this.form.value)
  			.subscribe(data=>{
  				this.modal.close();
  				this.router.navigate(['/vertical/usermanage']);

  			},error=>{
  				console.log('error');
  			})
  }

  insertuser<T>(body: Content<T>, header: Content<T> = null, footer: Content<T> = null, options: any = null) {
  
  this.modal.open({
    body: body,
    header: header,
    footer: footer,
    options: options

  });
}


deleteuser(rowdata){
	console.log(rowdata);
	this.httpSv.deleteuser({'id':rowdata})
		.subscribe(data=>{
			// this.router.navigate(['/vertical/usermanage']);
			this.modal.open({
				body: 'User deleted',
				header: 'Successful'
			})

		},error=>{
			console.log(error);
		})

}

updateuser<T>(rowdata,body: Content<T>, header: Content<T> = null, footer: Content<T> = null, options: any = null){
	// this.router.navigate(['/vertical/updateuser/'+rowdata]);
	
  this.httpSv.getuserone(rowdata)
  	.subscribe(data=>{
  		this.updatedata = data;
  		this.updateform.controls['id'].setValue(rowdata);
   		this.updateform.controls['name'].setValue(this.updatedata.name);
   		this.updateform.controls['email'].setValue(this.updatedata.email);
   		this.updateform.controls['role'].setValue(this.updatedata.role);

   		this.modal.open({
				    body: body,
				    header: header,
				    footer: footer,
				    options: options

  });


  	},error=>{
  		console.log(error);
  	}
  	)


   
}


updateuserdetails(){
	return this.httpSv.updateuserdetails(this.updateform.value)
		.subscribe(data=>{
			this.modal.close();
		},
		error=>{
			console.log(error);
		})
}



}
