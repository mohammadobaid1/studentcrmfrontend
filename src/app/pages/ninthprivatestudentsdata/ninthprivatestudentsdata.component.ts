import { Component, OnInit,ViewChild } from '@angular/core';
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


pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-ninthprivatestudentsdata',
  templateUrl: './ninthprivatestudentsdata.component.html',
  styleUrls: ['./ninthprivatestudentsdata.component.scss']
})
export class NinthprivatestudentsdataComponent extends BasePageComponent implements OnInit {


   tableData:any;
   form: FormGroup;
   searchresult: boolean = false;
   dataSource : any;
   searchresultdata : any;
   selecteddataarray: any;
   selection = new SelectionModel(true, []);
   displayedColumns: string[] = ['select','studentname', 'fathername','Schoolname','enrollmentnumber','englishmarks','sindhimarks','pakistanstudiesmark','generalsciencemarks','mathmarks','group','totalclearedpaper'];
   pdftableColumns: string[] = ['studentname', 'fathername','Schoolname','enrollmentnumber','englishmarks','sindhimarks','pakistanstudiesmark','generalsciencemarks','mathmarks','group','totalclearedpaper'];
   displayselecteddata: boolean = false; 

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
// this.httpSv.getninthregularbatch()
//       .subscribe(data=>{
//         console.log("ninth data",data);
//         this.rows = data;
//       })

//        this.form = this.formclass.getninthform();

this.httpSv.getninthregularbatch()
      .subscribe(data=>{
        console.log("ninth data",data);
        this.tableData = data;
        this.dataSource = new MatTableDataSource(this.tableData);
      })

      this.form = this.formclass.getninthform();
  }


search(){

    console.log(this.form.value);
    this.searchresultdata = [];
    this.selecteddataarray = [];
    this.selection.clear() ;
    this.httpSv.searchninthgeneraldata(this.form.value)
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


  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // const data = this.dataSource.data;
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const transformedFilter = filter.trim().toLowerCase();
    
      const listAsFlatString = (obj): string => {
        let returnVal = '';
    
        Object.values(obj).forEach((val) => {
          if (typeof val !== 'object') {
            returnVal = returnVal + ' ' + val;
          } else if (val !== null) {
            returnVal = returnVal + ' ' + listAsFlatString(val);
          }
        });
    
        return returnVal.trim().toLowerCase();
      };
    
      return listAsFlatString(data).includes(transformedFilter);
    };
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }



 //  generatePdf(data){
 //    console.log(data);
 //    var jsonstringfy = JSON.stringify(data);
 //  const documentDefinition = { content: jsonstringfy };
 //  pdfMake.createPdf(documentDefinition).download();
 // }


   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    this.selecteddataarray = this.selection.selected;
    console.log(this.selecteddataarray);
    return numSelected === numRows;
  }

  
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
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
