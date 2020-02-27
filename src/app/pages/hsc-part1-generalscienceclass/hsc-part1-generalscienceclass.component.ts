import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { AllForm } from '../forms/allforms';
import { Content } from '../../ui/interfaces/modal';
import * as csv from 'csvtojson';


@Component({
  selector: 'app-hsc-part1-generalscienceclass',
  templateUrl: './hsc-part1-generalscienceclass.component.html',
  styleUrls: ['./hsc-part1-generalscienceclass.component.scss']
})
export class HscPart1GeneralscienceclassComponent extends BasePageComponent implements OnInit  {


  dropdowndata: any;
  examtypedropdown: any;
  form: FormGroup;
  getstudentdataform : FormGroup;
  file: File;
  previewimportdata: any;
  groupdropdown: any;

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
          title: 'HSC Part 1 Class'
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

            this.examtypedropdown = [

      {
        "label": "Annual",
        "value": "Annual"
      },
      {
        "label": "Supplementry",
        "value": "Supplementry"
      }

      ];

           this.groupdropdown = [

      {
        "label": "Private",
        "value": "Private"
      },

      {
        "label": "Regular",
        "value": "Regular"
      }

      ];
    this.form = this.forminstance.getMatricgeneralclassform();
    this.getstudentdataform =  this.forminstance.getstudentdemographicdata();

  }


     insertstudent(){
     console.log(this.form.value);
     this.httpSv.addmatricregulardata(this.form.value)
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



  getstudentdata(){
    console.log(this.form.value);


    this.httpSv.getstudentdata(this.form.value)
      .subscribe(data=>{
        console.log(data);
        console.log(data[0].studentname);
        this.form.patchValue({
          studentname: data[0].studentname,
          fathername: data[0].fathername,
          dateofbirth: data[0].dateofbirth,
          yearofappearing: data[0].yearofappearing,
          id: data[0].id
        })
      },
      error=>{
        console.log(error);
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
  this.httpSv.ninthziauddindatabio(this.previewimportdata)
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

      this.previewimportdata = rows;
      return rows;
    })
    .then(tab => {
      console.log("tab",tab);
    });
}


}
