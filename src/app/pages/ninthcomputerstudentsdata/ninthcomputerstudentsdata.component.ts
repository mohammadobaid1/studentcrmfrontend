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
  selector: 'app-ninthcomputerstudentsdata',
  templateUrl: './ninthcomputerstudentsdata.component.html',
  styleUrls: ['./ninthcomputerstudentsdata.component.scss']
})


export class NinthcomputerstudentsdataComponent extends BasePageComponent implements OnInit {

   tableData: any;
   form: FormGroup;
   searchshowtrue: false;
   searchshow : true;
   searchresult: boolean = false;
   pdfdownloadtable: boolean = false;
   selecteddataarray: any;  
   displayselecteddata: boolean = false; 



    displayedColumns: string[] = ['select','studentname', 'fathername','Schoolname','enrollmentnumber','englishmarks','sindhimarks','pakistanstudiesmark','chemistryteory','chemistrypractical','computertheory','computerpractical','examtype','totalclearedpaper'];
    pdftableColumns: string[] = ['studentname', 'fathername','Schoolname','enrollmentnumber','englishmarks','sindhimarks','pakistanstudiesmark','chemistryteory','chemistrypractical','computertheory','computerpractical','examtype','totalclearedpaper'];
    


    searchresultdata : any;
    pdftable: any;
   
     selection = new SelectionModel(true, []);
     dataSource : any;
     @ViewChild(MatPaginator) paginator: MatPaginator;

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
  
    // document.getElementById("contentToConvert").style.visibility = "none";
    this.httpSv.getninthcomputerbatch()
      .subscribe(data=>{
        console.log("ninth data",data);
        this.tableData = data;
        this.dataSource = new MatTableDataSource(this.searchresultdata);
        console.log("Default data",this.tableData);
      })

      this.form = this.formclass.getninthform();
    
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
      pdf.save('MYPdf.pdf'); 

      this.displayselecteddata = false;
    });  
  },0);
  }
 
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
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    this.selecteddataarray = this.selection.selected;
    console.log(this.selection);
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


  rowClicked(rows){
    console.log(rows);
  }




}
