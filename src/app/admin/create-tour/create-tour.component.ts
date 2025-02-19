import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Tour } from 'src/app/models/tour';
import { ResponseObject } from 'src/app/models/response-object';
import { InputValidator } from 'src/app/validate/input-validator';
import { ErrorStateMatcher } from '@angular/material/core';
import { MyErrorStateMatcher } from 'src/app/validate/my-error-state-matcher';
import { Observable, map, startWith } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatAutocompleteSelectedEvent, MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import { Location } from 'src/app/models/location';
import { MatDialog } from '@angular/material/dialog';
import { AddLocationDialogComponent } from 'src/app/aDialog/add-location-dialog/add-location-dialog.component';
import { DialogComponent } from 'src/app/aDialog/dialog/dialog.component';
@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.css'],
})
export class CreateTourComponent {
  
  separatorKeysCodes: number[] = [ENTER, COMMA];
  cityCtrl = new FormControl('');
  filteredCities!: Observable<string[]>;
  cities: string[] = [];
  allCities: string[] = [];
  @ViewChild('cityInput')
  cityInput!: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);

  tourForm!: FormGroup;
  constructor(private adminService: AdminService,  private formBuilder: FormBuilder, public dialog: MatDialog){
    this.tourForm = this.formBuilder.group({
      tourName: this.tourNameFormControl,
      description: this.descriptionFormControl,
      price: this.priceFormControl,
      duration: this.durationFormControl,
      quality: this.qualityFormControl,
      range: this.range,
      imgURL: this.imgURL
    });

    this.adminService.getAllLocation().subscribe((res: ResponseObject)=>{
      this.allCities = res.data.map((location: Location) => location.city);
      console.log(this.allCities)
    }, (err)=>{
      console.log(err)
    })

    this.filteredCities = this.cityCtrl.valueChanges.pipe(
      startWith(null),
      map((city: string | null) => (city ? this._filter(city) : this.allCities.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value && this.allCities.includes(value)) {
      this.cities.push(value);
    }
    event.chipInput!.clear();
    this.cityCtrl.setValue(null);
  }

  remove(city: string): void {
    const index = this.cities.indexOf(city);
    if (index >= 0) {
      this.cities.splice(index, 1);
      this.announcer.announce(`Removed ${city}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.cities.push(event.option.viewValue);
    this.cityInput.nativeElement.value = '';
    this.cityCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allCities.filter(city => city.toLowerCase().includes(filterValue));
  }


  inputValidator: InputValidator = new InputValidator;
  range = new FormGroup({
    start: new FormControl<Date | null>(null, Validators.required),
    end: new FormControl<Date | null>(null, Validators.required),
  });

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  qualityFormControl = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]);
  durationFormControl = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]);
  priceFormControl = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]);
  descriptionFormControl = new FormControl('', [Validators.required, Validators.min(2)]);
  tourNameFormControl = new FormControl('', [Validators.required, Validators.min(1)]);
  imgURLFormControl = new FormControl('', [Validators.required]);
  

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


  tour :Tour =new Tour()

  selectedFile: File | null  = null;

  onFileSelected(event: Event) {
    console.log("onFileSelected")
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file: File = target.files[0];
      this.adminService.uploadFile(file).subscribe(res => {
        this.tour.imgURL = res;
      });
    }
  }  

  saveTour(){
    this.tour.tourName = this.tourName;
    this.tour.description  = this.description;
    this.tour.duration = this.duration;
    this.tour.quality = this.quality;
    this.tour.price = this.price;
    let startControl = this.range.get('start');
    let endControl = this.range.get('end');
  
    if(startControl && startControl.value && endControl && endControl.value) {
      this.tour.timeStart = startControl.value;
      this.tour.timeEnd = endControl.value;
    }

    this.adminService.createTour(this.tour).subscribe((res: ResponseObject)=>{

        const data = { name: "Yes", message: res.message, icon: "done_all", color: "green" };
        this.openDialog2(data)
    }, (err)=>{
      const data = { name: "No", message: err.message, icon: "cancel", color: "red" };
        this.openDialog2(data)
    })
  }

  matcher = new MyErrorStateMatcher();


  openDialog2(data: Object): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: data,
    });
  }

  openDialog(): void {
    this.dialog.open(AddLocationDialogComponent, {
      width: '50%',
      height:'80%'
    });
  }
}
