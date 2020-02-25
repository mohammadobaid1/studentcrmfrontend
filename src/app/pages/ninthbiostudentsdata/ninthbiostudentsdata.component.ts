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
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-ninthbiostudentsdata',
  templateUrl: './ninthbiostudentsdata.component.html',
  styleUrls: ['./ninthbiostudentsdata.component.scss']
})
export class NinthbiostudentsdataComponent extends BasePageComponent implements OnInit {

   tableData:any;
   form: FormGroup;
   updateform: FormGroup;
   searchresult: boolean = false;
   dataSource : any;
   searchresultdata : any;
   selecteddataarray: any;
   selection = new SelectionModel(true, []);
   displayedColumns: string[] = ['select','studentname', 'fathername','Schoolname','enrollmentnumber','englishmarks','sindhimarks','pakistanstudiesmark','chemistryteory','chemistrypractical','biotheory','biopractical','examtype','totalclearedpaper','operations'];
   operatorColumns: string[] = ['select','studentname', 'fathername','Schoolname','enrollmentnumber','englishmarks','sindhimarks','pakistanstudiesmark','chemistryteory','chemistrypractical','biotheory','biopractical','examtype','totalclearedpaper','operations'];
   pdftableColumns: string[] = ['studentname', 'fathername','Schoolname','enrollmentnumber','englishmarks','sindhimarks','pakistanstudiesmark','chemistryteory','chemistrypractical','biotheory','biopractical','examtype','totalclearedpaper'];
   displayselecteddata: boolean = false;

   operator: boolean = true;
   userroles: string; 

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
          title: 'Matric Class'
        }
      ]
    };



  }

  ngOnInit() {
    super.ngOnInit();
      this.loaddata();
      this.form = this.formclass.getninthform();
      this.updateform = this.formclass.updateninthbioform();
      this.userroles = localStorage.getItem ('userroles');
      if (this.userroles == 'admin') {
      this.operator = false;
    }
  }


 loaddata(){

this.httpSv.getninthbiobatch()
      .subscribe(data=>{
        console.log("ninth data",data);
        this.tableData = data;
         this.dataSource = new MatTableDataSource(this.tableData);
      })
 }



  deleteuser(value){
   // console.log("DELETE user value",value);
   this.httpSv.deleteninthbiodata(value)
     .subscribe(data=>{
      
      this.loaddata();
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
  //  this.updateform.controls['id'].setValue(rowdata);
    console.log(value);

    this.updateform.controls['studentid'].setValue(value.studentinfo.id);
    this.updateform.controls['name'].setValue(value.studentinfo.studentname);
    this.updateform.controls['fathername'].setValue(value.studentinfo.fathername);
    this.updateform.controls['ninthrollnumber'].setValue(value.studentinfo.enrollmentnumber);
    this.updateform.controls['englishmarks'].setValue(value.englishmarks);
    this.updateform.controls['sindhimarks'].setValue(value.sindhimarks);
    this.updateform.controls['pakistanstudiesmarks'].setValue(value.pakistanstudiesmark);
    this.updateform.controls['chemistrytheory'].setValue(value.chemistrytheorymarks);
    this.updateform.controls['chemistrypractical'].setValue(value.chemistrypracticalmarks);
    this.updateform.controls['biotheory'].setValue(value.biotheorymarks);
    this.updateform.controls['biopractical'].setValue(value.biopracticalmarks);
    this.updateform.controls['recordid'].setValue(value.id);


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
           this.loaddata();

        },error=>{
          console.log(error);
          this.modal.open({
            body: 'Error in updating record',
            header: 'Error'
          })
        })
  }

 search(){

    console.log(this.form.value);
    this.searchresultdata = [];
    this.selecteddataarray = [];
    this.selection.clear() ;
    this.httpSv.searchninthbiodata(this.form.value)
      .subscribe(data=>{
        console.log("data",data);
        this.searchresult = true;
        this.searchresultdata = data;
        this.dataSource = [];
        this.dataSource = new MatTableDataSource(this.searchresultdata);
        console.log(this.dataSource);
        // this.dataSource.paginator = this.paginator;
      
        
      },
      error=>{
        console.log(error);
      })

  }


 applyFilter(event: Event,filter : String) {
    var columnName = filter;
    this.dataSource.filterPredicate = (data: any, filter: String) => {      
        if(columnName == 'Schoolname')
        return data.studentinfo.schoolname.schoolname.indexOf(filter) !== -1;
        else if (columnName == 'studentname'){
          return data.studentinfo.studentname.indexOf(filter) !== -1;;
        }
        else if (columnName == 'fathername'){
          return data.studentinfo.fathername.indexOf(filter) !== -1;;
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


  downloaduserdata(){


    this.displayselecteddata = true; 
    setTimeout(() => {
      var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {  
   

      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('p', 'mm', 'a4'); 
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('students.pdf'); 

      this.displayselecteddata = false;
    });   
    }, 0);
   


}




}
