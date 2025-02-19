import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @ViewChild('placeInput')
  placeInputRef!: ElementRef;
  apiLoaded: Observable<boolean>;
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  autocomplete!: google.maps.places.Autocomplete;

  constructor(private httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyCufX0tcE72R9LgEg1F2ldawTWgM8K5OQY&libraries=places', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngAfterViewInit() {
    this.autocomplete = new google.maps.places.Autocomplete(this.placeInputRef.nativeElement);
    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const location = place.geometry.location;
        this.center = {
          lat: location.lat(),
          lng: location.lng()
        };
        this.markerPositions.push(this.center);
      }
    });
  }

  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      this.httpClient.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCufX0tcE72R9LgEg1F2ldawTWgM8K5OQY`)
        .subscribe((res: any) => {
          if (res.status === 'OK') {
            if (res.results[0]) {
              const address = res.results[0].formatted_address;
              console.log(address);
              // Now you can use the address as you want
            } else {
              console.log('No results found');
            }
          } else {
            console.log('Geocoder failed due to: ' + res.status);
          }
        });
    }
  }
  
}
