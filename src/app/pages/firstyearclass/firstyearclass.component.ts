import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { Content } from '../../ui/interfaces/modal';
import { FormGroup } from '@angular/forms';
import { AllForm } from '../forms/allforms';
import * as csv from 'csvtojson';
@Component({
  selector: 'app-firstyearclass',
  templateUrl: './firstyearclass.component.html',
  styleUrls: ['./firstyearclass.component.scss']
})
export class FirstyearclassComponent extends BasePageComponent implements OnInit{

  dropdowndata: any;
  form: FormGroup;
  file: File;
  previewimportdata: any;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private modal: TCModalService,
    private formclass: AllForm
  ) { 

    super(store, httpSv);

    this.pageData = {
      title: '',
      loaded: true,
      breadcrumbs: [
        {
          title: 'First Year Pre-Engineering Class'
        }
      ]
    };
  }

  ngOnInit() {
    super.ngOnInit();
    this.form = this.formclass.getfirstyearclassform();
    this.httpSv.getallschools()
      .subscribe(data=>{
        this.dropdowndata = data;
      });

  }


     insertstudent(){
     console.log(this.form.value);
     this.httpSv.addfirstyeardata(this.form.value)
      .subscribe(data=>{
        console.log("data inserted",data);
        this.modal.open({
          "header":"Successful",
          "body": "Record Inserted"
        });

      },
      error=>{
        this.modal.open({
          "header":"Error",
          "body": "Error occurred "
        });
        console.log("error occurred", error);
      })
     

  }


    previewdata<T>(body: Content<T>, header: Content<T> = null, footer: Content<T> = null, options: any = null) {
  
  this.modal.open({
    body: body,
    header: header,
    footer: footer,
    options: options

  });
}

closeModal(){
  this.modal.close();
}


bulkinsert(){
  console.log("bulk insert data",this.previewimportdata);
  this.httpSv.firstyearbulkdata(this.previewimportdata)
    .subscribe(data=>{
      this.modal.close();
      // this.modal.open({
      //    header: 'Successful',
      //    body: 'All records are inserted successfully'
      // });
    },err=>{

      console.log("Error in bulk insert",err);
    })

}


convertFile(event: any) {
  const file = event.target.files[0];
  this.readFileContent(file).then(content => {
    console.log('This is your file as string: ', content);
    this.processCsv(content)    
  }).catch(error => console.log(error))
}

readFileContent(file) {

  const reader = new FileReader()
  return new Promise((resolve, reject) => {
  reader.onload = event => {
    var eventdata = event;
    console.log(eventdata);
    this.textToCsv(reader.result);
  };
  reader.onerror = error => reject(error)
  reader.readAsText(file)
})
}

  processCsv(content){
    content.split('\n');
    
}


textToCsv(text) {
  
  const hds = new Array();
  const rows = new Array();
  const csvjson = csv({ noheader: true })
    .fromString(text)
    .then(jsonArr => {
      jsonArr.forEach((row, index) => {
        if (index === 0) {
          Object.keys(row).map(id => hds.push(row[id].toLocaleLowerCase()));
        } else {
          row = Object.keys(row).map(id => row[id]);
          if (row.length !== hds.length) {
            console.log('Ops looks like you have an empty space');
          }
          const newrow = {};
          hds.forEach((head, i) => {
            newrow[head] = row[i];
          });
          rows.push(newrow);
        }
      });
      this.previewimportdata = rows;
      return rows;
    })
    .then(tab => {
      console.log("tab",tab);
    });
}


}
