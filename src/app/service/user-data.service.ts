import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  url = 'https://randomuser.me/api/?results=6';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.url);
  }
  saveUser(data: any) {
    return this.http.post(this.url , data);
  }
}
