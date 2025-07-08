import { Component } from '@angular/core';
import { Req0401Service } from '../services/req0401.service';
import { Req } from '../interfaces/req.interface';

@Component({
  selector: 'req0401-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor( private req04Service: Req0401Service) { }

  get requisites(): Req[] {
    return [...this.req04Service.requisites];
  }

  onDeleteRequisit(id:string):void {
    this.req04Service.deleteReqById(id)
  }

  onNewAddReq(requisito: Req):void {
    this.req04Service.addRequi(requisito);
  }
}
