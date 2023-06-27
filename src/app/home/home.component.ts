import { Component } from '@angular/core';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title: string = "the book house"
  items: any;
  users: any;

  constructor(private userData: UserDataService) {
    userData.getUsers().subscribe((data) => {
      this.items = data;
      this.users = this.items.results;
      console.log(data)
    });
  }

}
