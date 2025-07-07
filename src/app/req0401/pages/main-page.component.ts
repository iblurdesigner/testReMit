import { Component } from '@angular/core';
import { Req } from '../interfaces/req.interface';

@Component({
  selector: 'req0401-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public requisites: Req[] = [
    {
      name: 'Requisito 01',
      code: '004-02-01'
    },
    {
      name: 'Requisito 02',
      code: '004-02-02'
    },
    {
      name: 'Requisito 03',
      code: '004-02-03'
    }
  ]

  onNewRequi(requisito: Req):void {
    this.requisites.push(requisito);
  }

}
