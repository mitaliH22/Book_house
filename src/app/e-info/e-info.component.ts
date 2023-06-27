import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.scss'],
  providers:[DataService]
})
export class EInfoComponent {
  Einfo1: string[] = [];
  Einfo2: string[] = [];

  getInfoService1() {
    this.Einfo1 = this.dService.getInfo1()
  }
  getInfoService2() { 
    this.Einfo2 = this.dService.getInfo2()
  }
  
  constructor(private dService: DataService){}
}
