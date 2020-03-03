import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-hscmarksheet',
  templateUrl: './hscmarksheet.component.html',
  styleUrls: ['./hscmarksheet.component.scss']
})
export class HscmarksheetComponent implements OnInit {
  
  @Input() isArray: boolean = false;
  @Input() marksheetdata: any[];
  @Output() success = new EventEmitter();
  @ViewChild('content') content: ElementRef;
  hidden = true;
  constructor() { }

  

  ngOnInit() {
    console.log(this.marksheetdata);
  }

  exportAsPDF() {    
    this.hidden = false;
    setTimeout(() => {
      var data = document.getElementById('print-section');
      html2canvas(data).then(canvas => {         
        var imgWidth = 210;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        
        var doc = new jspdf('p', 'mm');
        var position = 0;
        const contentDataURL = canvas.toDataURL('image/png')     
        doc.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
  
        while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        }
        doc.save('marksheet.pdf'); 
        this.hidden = true;
  
  });
    }, 0);
  
}

}
