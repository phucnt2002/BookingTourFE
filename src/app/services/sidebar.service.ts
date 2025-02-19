import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private _sidebarToggleState = new Subject<boolean>();
  sidebarToggleState$ = this._sidebarToggleState.asObservable();

  toggleSidebar(value: boolean) {
    this._sidebarToggleState.next(value);
  }
}
