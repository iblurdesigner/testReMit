import { Component } from '@angular/core';
import { Req0401Service } from '../services/req0401.service';

@Component({
  selector: 'req0401-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor( public req04Service: Req0401Service) { }

}
