import { Tour } from './tour';

export class Location {
  id: number;
  locationName: string;
  address: string;
  city: string;
  country: string;
  tours: Tour[];

  constructor(id: number, locationName: string, address: string, city: string, country: string, tours: Tour[]) {
    this.id = id;
    this.locationName = locationName;
    this.address = address;
    this.city = city;
    this.country = country;
    this.tours = tours;
  }
}