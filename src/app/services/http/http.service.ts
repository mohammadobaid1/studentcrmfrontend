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


    return this.http.post('http://localhost:3000/login',body.toString(), options);
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


    return this.http.post('http://localhost:3000/signup',body.toString(),options);

  }


  useraccessrole(){
    return this.http.get('http://localhost:3000/getuseraccessrole');
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


      return this.http.post('http://localhost:3000/adduser',body.toString(),options);




  }



  checkauthentication(){

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };

    return this.http.get('http://localhost:3000/authenticate',options);

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


      return this.http.post('http://localhost:3000/posttransaction',body.toString(),options);    

  }


  listtransaction(){

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };

    return this.http.get('http://localhost:3000/listalltransactions',options);


  }


  listusers(){

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };

    return this.http.get('http://localhost:3000/listallusers',options);


  }


  logout(){

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };

    return this.http.get('http://localhost:3000/logout',options);
  }

}
