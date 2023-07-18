export class Account {
    id: number;
    userName: string;
    password: string;
    role: string;
    status: string;
  
    constructor(id: number, userName: string, password: string, role: string, status: string) {
      this.id = id;
      this.userName = userName;
      this.password = password;
      this.role = role;
      this.status = status;
    }
  }
