import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  // @Input()
  // documentPath: string;
  // src:  any;
  @ViewChild(PdfViewerComponent, {static: false}) private pdfViewer!: PdfViewerComponent;
  @ViewChild('drawer', {static: false}) drawer!: MatSidenav;

  constructor(){}
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  pdfSrc: string = '';

  // onFileChange(event: any) {
  //   let file = event.target.files[0];
  //   let reader = new FileReader();
  //   reader.onload = (e: any) => {
  //     this.pdfSrc = e.target.result;
  //   };
  //   reader.readAsArrayBuffer(file);
  // }

  // onSubmit() {
  //   this.pdfSrc = (<HTMLInputElement>document.getElementById('pdfFileInput')).value;
  // }
  ngOnInit(): void{}
}
