import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { MatSidenav } from '@angular/material/sidenav';
// import { Pipe, PipeTransform } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})


export class ViewComponent {
  pdfSrc: any;
  page: number = 1;
  zoomValue: number = 1;
  totalPages: number = 0;
  isLoaded: boolean = false;
  intervalId: any;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      this.pdfSrc = e.target.result;
    };
    fileReader.readAsDataURL(file);
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
    this.autoFlip();
  }

  autoFlip() {
    if (this.page < this.totalPages) {
      this.page++;
    } else {
      this.page = 1;
    }
  }

  ngAfterViewInit() {
    this.intervalId = setInterval(() => {
      this.autoFlip();
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }
 


  // incrementPage(amount: number) {
  //   this.page += amount;
  // }

  // loadPdf() {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('GET', '/assets/pdf-test.pdf', true);
  //   xhr.responseType = 'blob';

  //   xhr.onload = (e: any) => {
  //     console.log(xhr);
  //     if (xhr.status === 200) {
  //       const blob = new Blob([xhr.response], { type: 'application/pdf' });
  //       this.pdfSrc = URL.createObjectURL(blob);
  //     }
  //   };

  //   xhr.send();
  // }
  // pdfSrc: string | Uint8Array | pdfSrc = './assets/pdf-test.pdf';
  // @Input()
  // documentPath: string;
  // src:  any;
  @ViewChild(PdfViewerComponent, {static: false}) private pdfViewer!: PdfViewerComponent;
  @ViewChild('drawer', {static: false}) drawer!: MatSidenav;
  
  constructor(){}
  // src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  // pdfSrc: string = '';

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

