import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.css'],
})
export class CreateTourComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  htmlContent: any;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'admin/v1/image',
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };
  id!: number;
  tourName!: string;
  description!: string;
  price!: number;
  duration!: number;
  quality!: number;
  timeStart!: Date;
  timeEnd!: Date;
  imgURL!: string;

  selectedFile: File | null  = null;
  onUpload(){

  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    this.selectedFile = file && file.length > 0 ? file[0] : null;
  }  
}
