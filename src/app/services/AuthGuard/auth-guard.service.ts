import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,throwError as observableThrowError } from 'rxjs';
import { catchError, tap,map } from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { HttpService } from '../http/http.service';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})


export class AuthGuardService implements CanActivate {

cookievalue = '';
  constructor(private httpsrv:HttpService,private router:Router,private cookieservice : CookieService) { }

 canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  
  
    if (localStorage.getItem('token')){
      return true;
    }

    else {

    this.router.navigate(['/public/login']);
    return false;
    }

   
   
}


}

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

cookievalue = '';
  constructor(private httpsrv:HttpService,private router:Router,private cookieservice : CookieService) { }

 canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  
  
    if (localStorage.getItem('token')){
    	var userrole = localStorage.getItem ('userroles');

         if (userrole == 'admin') {
                return true;
    }

    	else {
    		this.router.navigate(['/vertical/main']);
    	}
      
    }

    else {

    this.router.navigate(['/public/login']);
    return false;
    }

   
   
}


}
