import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  uploadForm: FormGroup;
  fileService: any;
  src: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.uploadForm = this.formBuilder.group({
      file: ['', Validators.required]
    });
  }

  upload() {
    this.router.navigate(['/view']);
  }

  onSubmit() {
    const formData = new FormData();
    const fileControl = this.uploadForm.get('file');

    if (fileControl) {
      formData.append('file', fileControl.value);
      this.fileService.upload(formData)
        .subscribe((response: { path: any; }) => {
          this.src = response.path;
          this.router.navigate(['/view']);
        });
    }
  }
}

