import { Tour } from './tour';

export class Location {
  id!: number;
  locationName: string;
  address: string;
  city: string;
  country: string;
  tours!: Tour[];

  constructor() {
    this.locationName = "";
    this.address = "";
    this.city = "";
    this.country = "";
  }
}