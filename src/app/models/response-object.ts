export class ResponseObject {
    private status: string;
    private message: string;
    private data: any;
  
    constructor(status: string, message: string, data: any) {
      this.status = status;
      this.message = message;
      this.data = data;
    }
  
    public getStatus(): string {
      return this.status;
    }
  
    public setStatus(status: string): void {
      this.status = status;
    }
  
    public getMessage(): string {
      return this.message;
    }
  
    public setMessage(message: string): void {
      this.message = message;
    }
  
    public getData(): any {
      return this.data;
    }
  
    public setData(data: any): void {
      this.data = data;
    }
  }
  