export class ResponseObject {
  private _status: string;
  private _message: string;
  private _data: any;

  constructor(status: string, message: string, data: any) {
    this._status = status;
    this._message = message;
    this._data = data;
  }

  // Getter for status
  get status(): string {
    return this._status;
  }

  // Setter for status
  set status(status: string) {
    this._status = status;
  }

  // Getter for message
  get message(): string {
    return this._message;
  }

  // Setter for message
  set message(message: string) {
    this._message = message;
  }

  // Getter for data
  get data(): any {
    return this._data;
  }

  // Setter for data
  set data(data: any) {
    this._data = data;
  }
}
