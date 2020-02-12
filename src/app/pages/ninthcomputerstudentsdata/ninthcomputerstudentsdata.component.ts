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


displayedColumns: string[] = ['studentname', 'fathername','Schoolname','enrollmentnumber','englishmarks','sindhimarks','pakistanstudiesmark','chemistryteory','chemistrypractical','computertheory','computerpractical','examtype','totalclearedpaper'];
   searchresultdata : any;
   dataSource = new MatTableDataSource(this.searchresultdata);
   selection = new SelectionModel(true, []);
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
    //this.dataSource.paginator = this.paginator;
 
    this.httpSv.getninthcomputerbatch()
      .subscribe(data=>{
        console.log("ninth data",data);
        this.tableData = data;
        console.log("Default data",this.tableData);
      })

      this.form = this.formclass.getninthform();
  }


  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  search(){

    console.log(this.form.value);
    this.searchresultdata = [];
    this.httpSv.searchninthsciencedata(this.form.value)
      .subscribe(data=>{
        console.log(data);
        this.searchresult = true;
        this.searchresultdata = data;
      // this.dataSource = data;
        
      },
      error=>{
        console.log(error);
      })

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
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


}
