// models/tour-guide.model.ts

import { Account } from './account';

export class TourGuide {
  id: number;
  guideName: string;
  guideBio: string;
  account: Account;

  constructor() {
    this.id = 0;
    this.guideName = '';
    this.guideBio = '';
    this.account = new Account();
  }
}
