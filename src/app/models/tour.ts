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
  imgURL: string;
  booking: Booking[];
  tourGuide: TourGuide;
  location: Location[];

  constructor(){
    this.id = 0;
    this.tourName = '';
    this.description = '';
    this.price = 0;
    this.duration = 0;
    this.quality = 0;
    this.timeStart = new Date();
    this.timeEnd = new Date();
    this.imgURL = '';
    this.booking = [];
    this.tourGuide = new TourGuide();
    this.location = [];
  }

  // constructor(
  //   id: number,
  //   tourName: string,
  //   description: string,
  //   price: number,
  //   duration: number,
  //   quality: number,
  //   timeStart: Date,
  //   timeEnd: Date,
  //   booking: Booking[],
  //   tourGuide: TourGuide,
  //   locations: Location[]
  // ) {
  //   this.id = id;
  //   this.tourName = tourName;
  //   this.description = description;
  //   this.price = price;
  //   this.duration = duration;
  //   this.quality = quality;
  //   this.timeStart = timeStart;
  //   this.timeEnd = timeEnd;
  //   this.booking = booking;
  //   this.tourGuide = tourGuide;
  //   this.location = locations;
  // }
}
