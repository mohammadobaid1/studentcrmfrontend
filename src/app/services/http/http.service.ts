import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(source: string) {
    return this.http.get(source).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    return observableThrowError(error.error || 'Server error');
  }


  loginuser(email,pass){

    let body = new URLSearchParams();
    body.set('email', email);
    body.set('password', pass);

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };
    
  console.log("body",body.toString());


    return this.http.post('https://demo.edcerts.io/api/login',body.toString(), options);
  }



  signupcompany(username,email,companyname,password){

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('email', email);
    body.set('companyname',companyname);
    body.set('password',password);

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };


    return this.http.post('https://demo.edcerts.io/api/signup',body.toString(),options);

  }


  useraccessrole(){
    return this.http.get('https://demo.edcerts.io/api/getuseraccessrole');
  }


  addusertocompany(username,emailaddress,password,accessrole){

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('email', emailaddress);
    body.set('password',password);
    body.set('useraccessrole',accessrole);

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };


      return this.http.post('https://demo.edcerts.io/api/adduser',body.toString(),options);




  }



  checkauthentication(){

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };

    return this.http.get('https://demo.edcerts.io/api/authenticate',options);

  }



  postransaction(studentname,fathername,passingyear,revocationyear,discipline,batch,enrollmentnumber){

        let body = new URLSearchParams();
        body.set('studentname', studentname);
        body.set('fathername', fathername);
        body.set('passingyear',passingyear);
        body.set('revocationyear',revocationyear);
        body.set('discipline',discipline);
        body.set('batch',batch);
        body.set('enrollmentnumber',enrollmentnumber);        

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };


      return this.http.post('https://demo.edcerts.io/api/posttransaction',body.toString(),options);    

  }


  listtransaction(){

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };

    return this.http.get('https://demo.edcerts.io/api/listalltransactions',options);


  }


  listusers(){

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };

    return this.http.get('https://demo.edcerts.io/api/listallusers',options);


  }


  logout(){

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };

    return this.http.get('https://demo.edcerts.io/api/logout',options);
  }


  verifyemail(token){
   console.log("service token",token);
   
    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache'})
    };
  
   let body = new URLSearchParams();
   body.set('token',token);
   return this.http.post('https://demo.edcerts.io/api/verifyemail',body.toString(),options);

  }


  deleteuser(email){


       let body = new URLSearchParams();
       body.set('emailaddress',email)



       let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };


      return this.http.post('https://demo.edcerts.io/api/deleteuser',body.toString(),options);  


  }


  gettokenleft(){

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache'})
    };


   return this.http.get('https://demo.edcerts.io/api/companytoken',options);
 

  }


  gettotalcertficates(){

      let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache'})
    };


   return this.http.get('https://demo.edcerts.io/api/totaltransactions',options);




  }


}
