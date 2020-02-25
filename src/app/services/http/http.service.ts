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




  loginuser(username,pass){

    let body = new URLSearchParams();
    body.set('name', username);
    body.set('password', pass);

    let options = {
          headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
    };
    
  


    return this.http.post('http://zeb.blockshift.com.pk/api/login',body.toString(), options);
  }



  getusers(){
    return this.http.get('http://zeb.blockshift.com.pk/api/listuser');

  } 

  getninthcomputerbatch(){
        console.log("service");
        return this.http.get('http://zeb.blockshift.com.pk/api/getninthtest');
  }




getninthbiobatch(){
        console.log("service");
        return this.http.get('http://zeb.blockshift.com.pk/api/getninthbio');
  }


getninthregularbatch(){
        console.log("service");
        return this.http.get('http:/zeb.blockshift.com.pk/api/getninthgeneral');
  }

  getmatricsciencebatch(){
    return this.http.get('http://zeb.blockshift.com.pk/api/getmatricscience');
  }

  getmatricregularbatch(){
    return this.http.get('http://zeb.blockshift.com.pk/api/getmatricgeneral');
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
 
        return this.http.post('http://zeb.blockshift.com.pk/api/inserttestdata',data,options);
  }

  adduser(data){

    let options = {
       headers: new HttpHeaders({'Content-Type':'application/json'})
       };
 
        return this.http.post('http://127.0.0.1:8000/api/register',data,options);

  }


  deleteuser(data){
    console.log(data);
    let options = {
       headers: new HttpHeaders({'Content-Type':'application/json'})
       };
 
        return this.http.post('http://zeb.blockshift.com.pk/api/deleteuser',data,options);

  }

  getuserone(id){
    return this.http.get('http://zeb.blockshift.com.pk/api/getuser/'+id);
  }


  updateuserdetails(data){
    let options = {
       headers: new HttpHeaders({'Content-Type':'application/json'})
       };
 
        return this.http.post('http://zeb.blockshift.com.pk/api/updateuser',data,options);

  }


addninthbiodata(data){

    console.log(data);
      let options = {
       headers: new HttpHeaders({'Content-Type':'application/json'})
       };
 
        return this.http.post('http://zeb.blockshift.com.pk/api/insertninthbio',data,options);
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

         return this.http.post('http://zeb.blockshift.com.pk/api/bulkinsertziauddinmatricscience',data,options);   

  }

  


  ninthziauddindata(data){
    let options = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };

    return this.http.post('http://zeb.blockshift.com.pk/api/bulkinsertziauddinninth',data,options);
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

    var url =  'http://zeb.blockshift.com.pk/api/getstudentbyrollnumber/'+ form.ninthrollnumber ; 
    return this.http.get(url);
 }

  addmatricsciencedata(data){

         console.log(data);
        let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://zeb.blockshift.com.pk/api/insertmatricscience',data,options);   


  }


  addmatricregulardata(data){

         console.log(data);
        let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://zeb.blockshift.com.pk/api/insertmatricgeneral',data,options);   


  }



  getallschool(){
    return this.http.get('http://zeb.blockshift.com.pk/api/getallschool');
  }


  searchninthsciencedata(formdata){

    let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://zeb.blockshift.com.pk/api/searchninthsciencedata',formdata,options);

  }


   searchninthbiodata(formdata){

    let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://zeb.blockshift.com.pk/api/searchninthbiodata',formdata,options);

  }


  searchninthgeneraldata(formdata){

    let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://zeb.blockshift.com.pk/api/searchninthgeneraldata',formdata,options);

  }



  deleteninthcomputerdata(formdata){

      let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://zeb.blockshift.com.pk/api/deleteninthsciencedata',formdata,options);


  }


  updateninthcomputerdata(formdata){

      let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://zeb.blockshift.com.pk/api/editninthsciencedata',formdata,options); 
  }



  deleteninthbiodata(formdata){

      let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://zeb.blockshift.com.pk/api/deleteninthbiodata',formdata,options);


  }


  updateninthbiodata(formdata){

      let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://zeb.blockshift.com.pk/api/editninthbiodata',formdata,options); 
  }



  deleteninthgeneraldata(formdata){

      let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://zeb.blockshift.com.pk/api/deleteninthgeneraldata',formdata,options);


  }


  updateninthgeneraldata(formdata){

      let options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
            };

         return this.http.post('http://zeb.blockshift.com.pk/api/editninthgeneraldata',formdata,options); 
  }


  /// HSC PART 1 PRE MEDICAL CLASS

  getPremedicalbatch(){
    return this.http.get('http://zeb.blockshift.com.pk/api/hsconepremed');
  }
  addPremedicaldata(data){
    
   let options = {
       headers: new HttpHeaders({'Content-Type':'application/json'})
       };

    return this.http.post('http://zeb.blockshift.com.pk/api/hsconepremed',data,options);   


}





}


