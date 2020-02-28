import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-hscmarksheet',
  templateUrl: './hscmarksheet.component.html',
  styleUrls: ['./hscmarksheet.component.scss']
})
export class HscmarksheetComponent implements OnInit {

  @Input() marksheetdata: any;
  @Output() success = new EventEmitter();
  @ViewChild('content') content: ElementRef;
  constructor() { }

  

  ngOnInit() {
  }

//   exportAsPDF() {    
//     var data = document.getElementById('MyDIv');
//     html2canvas(data).then(canvas => {
//       // Few necessary setting options
//       var imgWidth = 1140-240;
//       var pageHeight = 295;
//       var imgHeight = canvas.height * imgWidth / canvas.width;
//       var heightLeft = imgHeight;

//       const contentDataURL = canvas.toDataURL('image/png')
//       let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
//       var position = 0;
//       pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
//       pdf.save('MYPdf.pdf'); // Generated PDF
//     });  
// }
exportAsPDF(){
  let doc = new jspdf();
  doc.addHTML(this.content.nativeElement, function() {
     doc.save("marksheet.pdf");
  });
}

}
