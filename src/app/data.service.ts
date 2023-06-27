import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  info1: string[] = ['john doe', '5200', 'test@mailinator.com'];
  info2: string[] = ['jahn doe', '4200', 'testt@mailinator.com'];

  getInfo1() {
    return this.info1;
  }

  getInfo2() {
    return this.info2;
  }
  constructor() {}
}
