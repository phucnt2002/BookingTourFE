import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogComponent } from 'src/app/aDialog/dialog/dialog.component';
import { ResponseObject } from 'src/app/models/response-object';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-bookedtour',
  templateUrl: './bookedtour.component.html',
  styleUrls: ['./bookedtour.component.css'],
})
export class BookedtourComponent implements OnInit {

  data: ResponseObject | undefined;
  displayedColumns: string[] = ['id', 'bookingDate', 'note', 'phoneNumber', 'email', 'delete', 'edit'];
  dataSource: any
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    const account = localStorage.getItem('currentUser');
    if (account) {
      const userData = JSON.parse(account);
      this.customerService.getAllBooked(userData.id).subscribe((data: ResponseObject)=>
      {
        this.data = data
        this.dataSource =data.data
      },(err)=>{
        console.log(err)
      })
    } else {
      const data = {
        name: 'Must login',
        message: 'Go to login',
        icon: 'cancel',
        color: 'red',
      };
      this.openDialog(data);
      this.router.navigate(['/login']);
    }
  }

  openDialog(data: Object): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  cancelBooking(id: number){
    this.customerService.cancelBooking(id)
    .subscribe((res :ResponseObject)=>{
      if(res.status=="ok"){
        const data = {
          name: 'Deleted successfully',
          message: 'Continua',
          icon: 'done_all',
          color: 'green',
        };
        this.openDialog(data)
      }
      else{
        const data = {
          name: 'Can not delete',
          message: 'Continua',
          icon: 'cancel',
          color: 'red',
        };
        this.openDialog(data)
        this.getData()
      }
    })
  }
}
