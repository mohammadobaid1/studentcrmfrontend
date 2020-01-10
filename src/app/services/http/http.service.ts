import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

declare let ga:Function;

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
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
    };
    
  


    return this.http.post('http://127.0.0.1:8000/api/login',body.toString(), options);
  }



  signupcompany(username,email,password){

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('email', email);
    body.set('password',password);

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };


    return this.http.post('http://127.0.0.1:8000/api/register',body.toString(),options);

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


  changepassword(existingpassword,newpassword){

       let body = new URLSearchParams();
       body.set('existingpassword',existingpassword);
       body.set('newpassword',newpassword);



       let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };


      return this.http.post('https://demo.edcerts.io/api/changepassword',body.toString(),options);  


  }


  passwordreset(email){
    let body = new URLSearchParams();
    body.set('email',email);

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };


      return this.http.post('https://demo.edcerts.io/api/resetpasswordrequest',body.toString(),options);



  }

  resetpasswordbytoken(token,newpassword){

    let body = new URLSearchParams();
    body.set('token',token);
    body.set('newpassword',newpassword);


    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Cache-Control': 'no-cache',
    'Credentials': 'same-origin'}),
          withCredentials: true
    };


      return this.http.post('https://demo.edcerts.io/api/changepasswordviatoken',body.toString(),options);




  }

  getninthcomputerbatch(){
        console.log("service");
        return this.http.get('http://127.0.0.1:8000/api/listninthcomputerbatch');
  }

  getallschools(){
        return this.http.get('http://127.0.0.1:8000/api/getschools');
  }


  addninthcomputerdata(data){
        console.log(data.studentname);
        let body = new URLSearchParams();
      body.set('studentname',data.studentname);
      body.set('studentfathername',data.studentfathername);
      body.set('schoolid',data.schoolid);
      body.set('computermarks',data.computermarks);
      body.set('englishmarks',data.englishmarks);
      body.set('islamiatmarks',data.islamiatmarks);
      body.set('sindhimarks',data.sindhimarks);
      body.set('urdumarks',data.urdumarks);
      body.set('studentrollnumber',data.studentrollnumber);
        let options = {
       headers: new HttpHeaders({'Content-Type':'application/json'})
       };
        return this.http.post('http://127.0.0.1:8000/api/addninthcomputerstudent',data,options);
  }

}


