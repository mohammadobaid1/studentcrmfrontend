import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, NavigationEnd} from "@angular/router";
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'app-emailverification',
  templateUrl: './emailverification.component.html',
  styleUrls: ['./emailverification.component.scss']
})
export class EmailverificationComponent implements OnInit {

  emailconfirmation :any = '';

  constructor(private route:ActivatedRoute,private httpSv: HttpService,private router:Router) {


   }

  ngOnInit() {

  	this.route.params.subscribe(params=>{
  		console.log(params.verificationtoken);
  		this.httpSv.verifyemail(params.verificationtoken)
  			.subscribe(data=>{
  				this.emailconfirmation = data	
  				console.log("Email verified",this.emailconfirmation);
                                this.router.navigate(['/public/login']);
  			},
  			error=>{
  				this.router.navigate(['/public/login']);
  			})
  	})
  }

}
