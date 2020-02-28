import { Component, OnInit,ViewChild, ElementRef,TemplateRef } from '@angular/core';
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
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { Location } from "@angular/common";


pdfMake.vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-ninthcomputerstudentsdata',
  templateUrl: './ninthcomputerstudentsdata.component.html',
  styleUrls: ['./ninthcomputerstudentsdata.component.scss']
})


export class NinthcomputerstudentsdataComponent extends BasePageComponent implements OnInit {

  @ViewChild('content') content: ElementRef;
  @ViewChild('modalFooter') deletemodalfooter :  TemplateRef<any>;

   tableData: any;
   form: FormGroup;
   updateform: FormGroup;
   searchshowtrue: false;
   searchshow : true;
   searchresult: boolean = false;
   pdfdownloadtable: boolean = false;
   selecteddataarray: any;  
   displayselecteddata: boolean = false; 
   userroles: string;
   operator: boolean= true;
   deletestudentdata : any;



    displayedColumns: string[] = ['select','studentinfo.studentname', 'fathername','Schoolname','enrollmentnumber','englishmarks','sindhimarks','pakistanstudiesmark','chemistryteory','chemistrypractical','computertheory','computerpractical','examtype','totalclearedpaper','operations'];
    operatordisplayedColumns: string[] = ['select','studentinfo.studentname', 'fathername','Schoolname','enrollmentnumber','englishmarks','sindhimarks','pakistanstudiesmark','chemistryteory','chemistrypractical','computertheory','computerpractical','examtype','totalclearedpaper','operations'];
    pdftableColumns: string[] = ['studentinfo.studentname', 'fathername','Schoolname','enrollmentnumber','englishmarks','sindhimarks','pakistanstudiesmark','chemistryteory','chemistrypractical','computertheory','computerpractical','examtype','totalclearedpaper'];
    


    searchresultdata : any;
    pdftable: any;
   
     selection = new SelectionModel(true, []);
     dataSource : any;
     @ViewChild(MatPaginator) paginator: MatPaginator;

   constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private modal: TCModalService,
    private formclass : AllForm,
    private router: Router

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
      this.updateform = this.formclass.updateninthscienceform();
      this.userroles = localStorage.getItem ('userroles');
      if (this.userroles == 'admin') {
      this.operator = false;
    }

    
    
  }



  loaddata(){
    this.httpSv.getninthcomputerbatch()
      .subscribe(data=>{
        console.log("ninth data",data);
        this.tableData = data;
        this.dataSource = new MatTableDataSource(this.tableData);
        console.log("Default data",this.tableData);
      })
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
   

  // this.deletionconfirm();
   this.httpSv.deleteninthcomputerdata(this.deletestudentdata)
     .subscribe(data=>{


      this.modal.close();
      this.loaddata();     
      this.deletestudentdata = '';


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
    this.updateform.controls['computertheory'].setValue(value.computertheorymarks);
    this.updateform.controls['computerpractical'].setValue(value.computerpracticalmarks);
    this.updateform.controls['recordid'].setValue(value.id);


    this.modal.open({
            body: body,
            header: header,
            footer: footer,
            options: options,
    })
  }


  updateuserdetails(){
    console.log("update user form", this.updateform.value);
    this.httpSv.updateninthcomputerdata(this.updateform.value)
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

  redirectuser(){
    console.log("Router function")
 

  }






 downloaduserdata(){


    this.displayselecteddata = true; 
    setTimeout(() => {
      var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {  
   

      var imgWidth = 208;   
      var pageHeight = 297;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      // let pdf = new jsPDF('p', 'mm', 'a4'); 
      // var position = 0;  
      // pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
      var pdfWidth = pdf.internal.pageSize.getWidth();
      var pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(contentDataURL, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('students.pdf'); 

      this.displayselecteddata = false;
    });   
    }, 0);
   


}
 //  makepdf(){
 //      this.displayselecteddata = true; 
 //      console.log(this.content);
 //    setTimeout(() => {  
 //    let doc = new jsPDF();
    

 //    doc.addHTML(this.content.nativeElement, function() {
 //        doc.save("obrz.pdf");

 //        this.displayselecteddata = false;
 //     });
 // },0);

 //   };
 
 generatePdf(data){
    console.log(data);
    var jsonstringfy = JSON.stringify(data);
  const documentDefinition = { content: jsonstringfy };
  pdfMake.createPdf(documentDefinition).download();
 }



  search(){

    console.log(this.form.value);
    this.selecteddataarray = [];
    this.selection.clear() ;
    this.httpSv.searchninthsciencedata(this.form.value)
      .subscribe(data=>{
        console.log(data);
        this.searchresult = true;
        this.searchresultdata = data;
        this.dataSource = [];
        this.dataSource = new MatTableDataSource(this.searchresultdata);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
      
        
      },
      error=>{
        console.log(error);
      })

  }





 isAllSelected() {
   if(this.dataSource){
    const numSelected = this.selection.selected.length;
    
    const numRows = this.dataSource.filteredData.length;
    this.selecteddataarray = this.selection.selected;    
    return numSelected === numRows;
   }
   
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
