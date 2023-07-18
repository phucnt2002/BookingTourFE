// models/tour.model.ts

import { Booking } from './booking';
import { TourGuide } from './tour-guide';
import { Location } from './location';

export class Tour {
  id: number;
  tourName: string;
  description: string;
  price: number;
  duration: number;
  quality: number;
  timeStart: Date;
  timeEnd: Date;
  booking: Booking[];
  tourGuide: TourGuide;
  locations: Location[];

  constructor(
    id: number,
    tourName: string,
    description: string,
    price: number,
    duration: number,
    quality: number,
    timeStart: Date,
    timeEnd: Date,
    booking: Booking[],
    tourGuide: TourGuide,
    locations: Location[]
  ) {
    this.id = id;
    this.tourName = tourName;
    this.description = description;
    this.price = price;
    this.duration = duration;
    this.quality = quality;
    this.timeStart = timeStart;
    this.timeEnd = timeEnd;
    this.booking = booking;
    this.tourGuide = tourGuide;
    this.locations = locations;
  }
}
