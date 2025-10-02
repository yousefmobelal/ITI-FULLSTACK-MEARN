import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tables-data',
  imports: [FormsModule],
  templateUrl: './tables-data.html',
  styleUrl: './tables-data.css',
})
export class TablesData {
  users: Array<UserData> = [];
  userName: string = '';
  email: string = '';

  addUser() {
    if (!this.userName || !this.email) return;
    this.users.push(new UserData(this.userName, this.email));
    this.userName = '';
    this.email = '';
  }
}

class UserData {
  constructor(public username: string, public email: string) {}
}
