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



 

  getninthcomputerbatch(){
        console.log("service");
        return this.http.get('http://127.0.0.1:8000/api/getninthtest');
  }


getninthbiobatch(){
        console.log("service");
        return this.http.get('http://127.0.0.1:8000/api/getninthbio');
  }


getninthregularbatch(){
        console.log("service");
        return this.http.get('http://127.0.0.1:8000/api/getninthgeneral');
  }

  getmatricsciencebatch(){
    return this.http.get('http://127.0.0.1:8000/api/getmatricscience');
  }

  getmatricregularbatch(){
    return this.http.get('http://127.0.0.1:8000/api/getmatricgeneral');
  }

getfirstyearbatch(){
  return this.http.get('http://zeb.blockshift.com.pk/api/listfirstpreengineeringbatch');

}


getseconyearbatch(){
  return this.http.get('http://zeb.blockshift.com.pk/api/listsecondpreengineeringbatch')
}


  getallschools(){
        return this.http.get('http://zeb.blockshift.com.pk/api/getschools');
  }


  addninthcomputerdata(data){

    console.log(data);
      let options = {
       headers: new HttpHeaders({'Content-Type':'application/json'})
       };
 
        return this.http.post('http://127.0.0.1:8000/api/inserttestdata',data,options);
  }


addninthbiodata(data){

    console.log(data);
      let options = {
       headers: new HttpHeaders({'Content-Type':'application/json'})
       };
 
        return this.http.post('http://127.0.0.1:8000/api/insertninthbio',data,options);
  }


addninthgeneraldata(data){

    console.log(data);
      let options = {
       headers: new HttpHeaders({'Content-Type':'application/json'})
       };
 
        return this.http.post('http://127.0.0.1:8000/api/insertninthgeneral',data,options);
  }
 

  addmatricdata(data){
        console.log(data.studentname);
        let options = {
       headers: new HttpHeaders({'Content-Type':'application/json'})
       };
        return this.http.post('http://zeb.blockshift.com.pk/api/addmatricstudent',data,options);
  }


    addfirstyeardata(data){
 
        let options = {
       headers: new HttpHeaders({'Content-Type':'application/json'})
       };
        return this.http.post('http://zeb.blockshift.com.pk/api/addfirstyearpreengstudent',data,options);
  }


    addsecondyeardata(data){

        let options = {
       headers: new HttpHeaders({'Content-Type':'application/json'})
       };
        return this.http.post('http://zeb.blockshift.com.pk/api/addsecondyearpreengstudent',data,options);
  }




  ninthcomputerbulkdata(data){
        console.log(data);
        let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://zeb.blockshift.com.pk/api/bulkninthcomputerbatch',data,options);   

  }

  matricbulkdata(data){
        console.log(data);
        let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://127.0.0.1:8000/api/bulkinsertziauddinmatricscience',data,options);   

  }

  


  ninthziauddindata(data){
    let options = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };

    return this.http.post('http://127.0.0.1:8000/api/bulkinsertziauddinninth',data,options);
  }




  ninthziauddindatabio(data){
    let options = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };

    return this.http.post('http://zeb.blockshift.com.pk/api/bulkinsertziauddinninthbio',data,options);
  }



ninthziauddindatageneral(data){
    let options = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };

    return this.http.post('http://zeb.blockshift.com.pk/api/bulkinsertziauddinninthgeneral',data,options);
  }

    firstyearbulkdata(data){
        console.log(data);
        let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://zeb.blockshift.com.pk/api/bulkfirstyearpreengbatch',data,options);   

  }


  secondyearbulkddata(data){
        console.log(data);
        let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://zeb.blockshift.com.pk/api/bulksecondyearpreengbatch',data,options);   

  }

logout(token) {

  console.log("service token", token);
   var header = {
  headers: new HttpHeaders()
    .set('Authorization',  'Bearer '+token)
};

   return this.http.post('http://zeb.blockshift.com.pk/api/logout',null,header);
 }


 getstudentdata(form){

    var url =  'http://127.0.0.1:8000/api/getstudentbyrollnumber/'+ form.ninthrollnumber ; 
    return this.http.get(url);
 }

  addmatricsciencedata(data){

         console.log(data);
        let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://127.0.0.1:8000/api/insertmatricscience',data,options);   


  }


  addmatricregulardata(data){

         console.log(data);
        let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://127.0.0.1:8000/api/insertmatricgeneral',data,options);   


  }



  getallschool(){
    return this.http.get('http://127.0.0.1:8000/api/getallschool');
  }


  searchninthsciencedata(formdata){

    let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://127.0.0.1:8000/api/searchninthsciencedata',formdata,options);

  }



}


