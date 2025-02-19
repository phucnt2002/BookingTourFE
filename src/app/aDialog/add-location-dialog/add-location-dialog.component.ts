import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from 'src/app/models/location';
import { ResponseObject } from 'src/app/models/response-object';
import { AdminService } from 'src/app/services/admin.service';
import { MyErrorStateMatcher } from 'src/app/validate/my-error-state-matcher';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-location-dialog',
  templateUrl: './add-location-dialog.component.html',
  styleUrls: ['./add-location-dialog.component.css']
})
export class AddLocationDialogComponent {
  locationName!: string;
  address!: string;
  city!: string;
  country!: string;
  tourForm!: FormGroup;
  location!: Location;

  constructor(private adminService: AdminService,  private formBuilder: FormBuilder, private dialog: MatDialog){
    this.tourForm = this.formBuilder.group({
      locationName: this.locationNameFormControl,
      address: this.addressFormControl,
      city: this.cityFormControl,
      country: this.countryFormControl,
      
    })
  }
  matcher = new MyErrorStateMatcher();
  locationNameFormControl = new FormControl('', [Validators.required, Validators.min(1)]);
  addressFormControl = new FormControl('', [Validators.required, Validators.min(1)]);
  cityFormControl = new FormControl('', [Validators.required, Validators.min(1)]);
  countryFormControl = new FormControl('', [Validators.required, Validators.min(1)]);

  saveTour(){
    this.location = new Location()
    this.location.address = this.address;
    this.location.country = this.country;
    this.location.city = this.city;
    this.location.locationName = this.locationName;
    this.adminService.createLocation(this.location).subscribe((res: ResponseObject)=>{
      if(res.status == 'failed'){
        const data = { name: "No", message: res.message, icon: "cancel", color: "red" };
        this.openDialog(data)
      }else{
        const data = { name: "Yes", message: res.message, icon: "done_all", color: "green" };
        this.openDialog(data)
      }
    },
    (err)=>{

    });
  }

  openDialog(data: Object): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: data,
    });
  }

}
