import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { BasePageComponent } from '../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';
import { AllForm } from '../forms/allforms';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { SelectionModel } from '@angular/cdk/collections';
import { Content } from '../../ui/interfaces/modal';
import { MatTableDataSource } from '@angular/material/table';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-hsc-part1-pre-medicalstudentsdata',
  templateUrl: './hsc-part1-pre-medicalstudentsdata.component.html',
  styleUrls: ['./hsc-part1-pre-medicalstudentsdata.component.scss']
})
export class HscPart1PreMedicalstudentsdataComponent extends BasePageComponent implements OnInit {
  
  
  displayedColumns: string[] = ['select','studentname', 'studentfathername','studentrollnumber','englishmarks','urdumarks','islamiatmarks','physicstheorymarks','physicspracticalmarks','chemistrytheorymarks','chemistrypracticalmarks','totalmarks','percentage','grade','operations'];  
  form: FormGroup;
  showmarksheet = false;
  dataSource : any;
  searchresultdata : any;
  selecteddataarray: any;
  selection = new SelectionModel(true, []);
  marksheetdata : any;
  updateform: FormGroup;
  deletestudentdata : any;
  @ViewChild('modalFooter') deletemodalfooter :  TemplateRef<any>;
  constructor(
   store: Store<IAppState>,
   httpSv: HttpService,
   private modal: TCModalService,
   private formclass : AllForm

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
      this.loadData();
 }




loadData(){
  this.form = this.formclass.getninthform();
  this.updateform = this.formclass.getPreMedicalclassform();
      this.httpSv.getallschools()
      .subscribe((schoolData :any)=>{        
        this.httpSv.getPremedicalbatch()
        .subscribe((data :any)=>{
          data.forEach(element => {
            element.schoolName = schoolData.find(x=>x.value == element.schoolid).label;
          });             
          this.dataSource = new MatTableDataSource(data);
        });
      })
}
 showPDF(data){
  this.showmarksheet = true;
  this.marksheetdata = [data];
 }
 showPDFs(){
  this.showmarksheet = true;
  this.marksheetdata = this.selection.selected;
 }
 isSuccessful(){
   this.showmarksheet = false;   
 }

 deletionconfirm(value){
  this.modal.open({
  body: 'Are you sure you want to delete this ?',
  header: 'Confirmation Box',
  footer: this.deletemodalfooter,
  
});

  this.deletestudentdata = value;
}


unsetdelete(){
this.modal.close();
this.deletestudentdata = '';

}


deleteuser(){
// console.log("DELETE user value",value);
this.httpSv.deleteninthbiodata(this.deletestudentdata)
 .subscribe(data=>{
  this.modal.close();
  this.loadData();
 },
 error=>{
   console.log(error);
   this.modal.open({
      "header":"Error",
      "body": "Error occurred "
    });



 });

 
}


updateuser<T>(value,body: Content<T>, header: Content<T> = null, footer: Content<T> = null, options: any = null){
this.updateform.controls['studentname'].setValue(value.studentinfo.studentname);
this.updateform.controls['studentfathername'].setValue(value.studentinfo.fathername);
this.updateform.controls['studentrollnumber'].setValue(value.enrollmentnumber);
this.updateform.controls['islamiatmarks'].setValue(value.islamiatmarks);
this.updateform.controls['englishmarks'].setValue(value.englishmarks);
this.updateform.controls['urdumarks'].setValue(value.urdumarks);
this.updateform.controls['id'].setValue(value.id);
this.updateform.controls['chemistrytheorymarks'].setValue(value.chemistrytheorymarks);
this.updateform.controls['chemistrypracticalmarks'].setValue(value.chemistrypracticalmarks);
this.updateform.controls['physicspracticalmarks'].setValue(value.physicspracticalmarks);
this.updateform.controls['physicstheorymarks'].setValue(value.physicstheorymarks);
this.updateform.controls['matricpassingyear'].setValue(value.matricpassingyear);
this.updateform.controls['yearappearing'].setValue(value.yearappearing);
this.updateform.controls['totalmarks'].setValue(value.totalmarks);
this.updateform.controls['percentage'].setValue(value.percentage);
this.updateform.controls['grade'].setValue(value.grade);

this.modal.open({
        body: body,
        header: header,
        footer: footer,
        options: options
})
}


updateuserdetails(){
console.log("update user form", this.updateform.value);
this.httpSv.updateninthbiodata(this.updateform.value)
    .subscribe(data=>{
      console.log(data);
      this.modal.close();
       this.loadData();

    },error=>{
      console.log(error);
      this.modal.open({
        body: 'Error in updating record',
        header: 'Error'
      })
    })
}

applyFilter(event: Event,filter : String) {
var columnName = filter;
this.dataSource.filterPredicate = (data: any, filter: String) => {      
    if(columnName == 'Schoolname')
    return data.studentinfo.schoolname.schoolname.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    else if (columnName == 'studentname'){
      return data.studentinfo.studentname.toLowerCase().indexOf(filter.toLowerCase()) !== -1;;
    }
    else if (columnName == 'fathername'){
      return data.studentinfo.fathername.toLowerCase().indexOf(filter.toLowerCase()) !== -1;;
    }
    else if (columnName == 'enrollmentnumber'){
      return data.studentinfo.enrollmentnumber ? data.studentinfo.enrollmentnumber.indexOf(filter) !== -1 : false;
    }
    return null;
   };                 
const filterValue = (event.target as HTMLInputElement).value;
this.dataSource.filter = filterValue;
}


generatePdf(data){
console.log(data);
var jsonstringfy = JSON.stringify(data);
const documentDefinition = { content: jsonstringfy };
pdfMake.createPdf(documentDefinition).download();
}


isAllSelected() {
const numSelected = this.selection.selected.length;
const numRows = this.dataSource.data.length;
this.selecteddataarray = this.selection.selected;
console.log(this.selecteddataarray);
return numSelected === numRows;
}


masterToggle() {
if(this.isAllSelected())
{
  this.selection.clear();
  this.selecteddataarray=[];
} else this.dataSource.filteredData.forEach(row => this.selection.select(row));
}



checkboxLabel(row): string {
if (!row) {
  return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
}
return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
}

}
