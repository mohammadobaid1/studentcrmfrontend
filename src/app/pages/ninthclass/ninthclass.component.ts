import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { AllForm } from '../forms/allforms';
import * as csv from 'csvtojson';


@Component({
  selector: 'app-ninthclass',
  templateUrl: './ninthclass.component.html',
  styleUrls: ['./ninthclass.component.scss']
})
export class NinthclassComponent extends BasePageComponent implements OnInit {
  dropdowndata: any;
  form: FormGroup;
  file: File;
  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private modal: TCModalService,
    private forminstance: AllForm
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


    this.httpSv.getallschools()
      .subscribe(data=>{
        this.dropdowndata = data;
      })

      this.form = this.forminstance.getNinthclassform();

  }


   insertstudent(){
     console.log(this.form.value);
     this.httpSv.addninthcomputerdata(this.form.value)
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

  processCsv(content){
    content.split('\n');
    // other sorts of magic
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

convertFile(event: any) {
  const file = event.target.files[0];
  this.readFileContent(file).then(content => {
    console.log('This is your file as string: ', content);
    // Operate your string as required in a separate function
    this.processCsv(content)    
  }).catch(error => console.log(error))
}


textToCsv(text) {
  // console.log(text);
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
      //const table = { headers: hds, rows: rows };
      return rows;
    })
    .then(tab => {
      console.log("tab",tab);
    });
}
}



